import PropTypes from "prop-types";
import { useRef } from "react";
import { registerForEvent } from "../../services/eventService";

const RegistrationForm = ({ onClose, eventId, onSuccessfulRegistration }) => {
  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const obj = {};
    formData.forEach((value, key) => (obj[key] = value));

    try {
      const response = await registerForEvent(obj.nombre, obj.email, eventId);
      if (response.status === "success") {
        alert("Te registraste al evento con éxito");
        onSuccessfulRegistration(); // Notificar a EventDetail que la inscripción fue exitosa
      } else {
        alert("Alguno de los datos es incorrecto");
      }
    } catch (error) {
      alert("Ocurrió un error al inscribirse al evento");
      console.error("Error al inscribirse al evento:", error); // Agrega un log del error para depuración
    }

    onClose(); // Cierra el formulario independientemente del resultado
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20 font-lato">
      <div className="p-8 bg-white shadow-lg rounded-3xl">
        <form onSubmit={handleSubmit} ref={form}>
          <div className="relative mb-4">
            <label
              htmlFor="nombre"
              className="block text-sm font-bold text-orangeprimary"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-orangeprimary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full py-2 pl-4 mt-1 border border-gray-300 shadow-sm rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 text-white transition-colors duration-300 border-2 border-white bg-redprimary rounded-3xl hover:bg-red-800 hover:text-white"
              style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white transition-colors duration-300 border-2 border-white bg-orangeprimary rounded-3xl hover:bg-orange-600 hover:text-white"
              style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
            >
              Inscribirse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

RegistrationForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  eventId: PropTypes.string.isRequired,
  onSuccessfulRegistration: PropTypes.func.isRequired, // Añadido aquí
};

export default RegistrationForm;
