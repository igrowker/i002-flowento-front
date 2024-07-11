import PropTypes from "prop-types";

const EventMessageModal = ({ message, onClose, isSuccess, onEdit }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <h2
          className={`text-2xl font-bold mb-4 ${
            isSuccess ? "text-orangeprimary" : "text-redprimary"
          } text-center`}
        >
          {isSuccess ? "¡Evento creado con éxito!" : "Error al crear el evento"}
        </h2>
        <p className="text-sm text-gray-700 mb-4">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 text-white bg-redprimary rounded-3xl hover:bg-red-800 hover:text-white transition-colors duration-300"
          >
            Cerrar
          </button>
          {!isSuccess && (
            <button
              onClick={onEdit}
              className="px-4 py-2 text-white bg-orangeprimary rounded-3xl hover:bg-orange-600 hover:text-white transition-colors duration-300"
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
