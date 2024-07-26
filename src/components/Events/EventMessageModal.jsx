import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EventMessageModal = ({ onClose, isSuccess, onEdit }) => {
  const handleEditClick = () => {
    onClose();
    onEdit();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-8 bg-white shadow-lg rounded-3xl">
        <h2
          className={`text-2xl font-bold mb-4 ${
            isSuccess ? "text-orangeprimary" : "text-redprimary"
          } text-center`}
        >
          {isSuccess ? "¡Evento creado con éxito!" : "Error al crear el evento"}
        </h2>
        <div className="flex justify-center">
          <Link to="/event-admin">
            <button
              onClick={onClose}
              className="px-4 py-2 mr-2 text-white transition-colors duration-300 border-2 border-white bg-redprimary rounded-3xl hover:bg-red-800 hover:text-white"
              style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
            >
              Cerrar
            </button>
          </Link>
          {!isSuccess && (
            <button
              onClick={handleEditClick}
              className="px-4 py-2 text-white transition-colors duration-300 border-2 border-white bg-orangeprimary rounded-3xl hover:bg-orange-600 hover:text-white"
              style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
            >
              Volver a Editar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

EventMessageModal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool,
  onEdit: PropTypes.func.isRequired,
};

export default EventMessageModal;
