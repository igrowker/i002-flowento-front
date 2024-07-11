import { useState } from "react";
import PropTypes from "prop-types";
import { IoCalendarOutline } from "react-icons/io5";
import EventMessageModal from "./EventMessageModal";

const EventForm = ({ onClose, onSubmit }) => {
  const [evento, setEvento] = useState({
    titulo: "",
    fecha: "",
    hora: "",
    ubicacion: "",
    estado: "",
    imagen: "",
    precio: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvento((prevEvento) => ({
      ...prevEvento,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEvento((prevEvento) => ({
          ...prevEvento,
          imagen: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(evento); // Lógica de envío al backend
      setIsSuccess(true);
      setMessage("¡Evento creado con éxito!");
      setShowMessage(true);
    } catch (error) {
      setIsSuccess(false);
      setMessage("Hubo un problema al crear el evento, vuelve a intentarlo.");
      setShowMessage(true);
    }
  };

  const handleEdit = () => {
    setShowMessage(false); // Cerrar el mensaje de error
    // Puedes agregar aquí lógica adicional si es necesario para limpiar el formulario o hacer otras acciones
  };

  const closeModal = () => {
    setShowMessage(false);
    onClose();
  };

  const formFields = [
    { id: "titulo", label: "Título", type: "text" },
    { id: "fecha", label: "Fecha", type: "date" },
    { id: "hora", label: "Hora", type: "time" },
    { id: "ubicacion", label: "Ubicación", type: "text" },
    { id: "informacion", label: "Información", type: "text" },
    { id: "imagen", label: "Imagen", type: "file" },
    { id: "precio", label: "Precio", type: "number" },
  ];

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-redprimary text-center">
            Crear Nuevo Evento
          </h2>
          <form onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <div key={field.id} className="mb-4">
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <select
                    id={field.id}
                    name={field.id}
                    value={evento[field.id]}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
                    required
                  >
                    {field.options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === "file" ? (
                  <>
                    <input
                      type="text"
                      id={field.id}
                      name={field.id}
                      value={evento[field.id]}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      required
                    />
                    <input
                      type="file"
                      id={`${field.id}-file`}
                      accept=".jpg, .jpeg, .png"
                      onChange={handleFileChange}
                      className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    />
                  </>
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={evento[field.id]}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
                    required
                  />
                )}

                {field.id === "fecha" || field.id === "hora" ? (
                  <IoCalendarOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orangeprimary" />
                ) : null}
              </div>
            ))}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 text-white bg-redprimary rounded-3xl hover:bg-red-800 hover:text-white transition-colors duration-300"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-orangeprimary rounded-3xl hover:bg-orange-600 hover:text-white transition-colors duration-300"
              >
                Crear Evento
              </button>
            </div>
          </form>
        </div>
      </div>
      {showMessage && (
        <EventMessageModal
          message={message}
          onEdit={handleEdit}
          onClose={closeModal}
          isSuccess={isSuccess}
        />
      )}
    </>
  );
};

EventForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EventForm;
