import { useState } from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import EventForm from "./EventForm";

const FloatingButton = ({ onEventCreate }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEventSubmit = (evento) => {
    onEventCreate(evento);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="fixed z-10 p-4 text-white transition duration-300 border-4 border-white rounded-full shadow-lg bottom-16 right-8 bg-orangeprimary hover:bg-orange-600"
        style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
      >
        <FaPlus className="text-2xl" />
      </button>
      {modalOpen && (
        <EventForm onClose={closeModal} onSubmit={handleEventSubmit} />
      )}
    </>
  );
};

FloatingButton.propTypes = {
  onEventCreate: PropTypes.func.isRequired,
};

export default FloatingButton;
