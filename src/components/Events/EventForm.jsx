import { useState } from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import EventModal from "./EventModal";

const EventForm = ({ onEventCreate }) => {
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
        className="fixed p-4 text-white transition duration-300 border-4 border-white rounded-full shadow-lg bottom-8 right-8 bg-orangeprimary hover:bg-orange-600"
        style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
      >
        <FaPlus className="text-2xl" />
      </button>
      {modalOpen && (
        <EventModal onClose={closeModal} onSubmit={handleEventSubmit} />
      )}
    </>
  );
};

EventForm.propTypes = {
  onEventCreate: PropTypes.func.isRequired,
};

export default EventForm;
