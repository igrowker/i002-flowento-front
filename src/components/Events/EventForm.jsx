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
    setShowMessage(false);
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
        <div className="p-8 bg-white shadow-lg rounded-3xl">
          <h2 className="mb-4 text-2xl font-bold text-center text-redprimary">
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
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 shadow-sm rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
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
                      className="block w-full px-3 py-2 mt-1 border border-gray-300 shadow-sm rounded-3xl focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      required
                    />
                    <input
                      type="file"
                      id={`${field.id}-file`}
                      accept=".jpg, .jpeg, .png"
                      onChange={handleFileChange}
                      className="block w-full px-3 py-2 mt-1 border-gray-300 shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    />
                  </>
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={evento[field.id]}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 shadow-sm rounded-3xl focus:outline-none focus:ring-orangeprimary focus:border-orangeprimary sm:text-sm"
                    required
                  />
                )}

                {field.id === "fecha" || field.id === "hora" ? (
                  <IoCalendarOutline className="absolute transform -translate-y-1/2 right-3 top-1/2 text-orangeprimary" />
                ) : null}
              </div>
            ))}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 mr-2 text-white transition-colors duration-300 bg-redprimary rounded-3xl hover:bg-red-800 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white transition-colors duration-300 bg-orangeprimary rounded-3xl hover:bg-orange-600 hover:text-white"
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
