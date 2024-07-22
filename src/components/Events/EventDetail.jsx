import React, { useState } from 'react';
import EventDescriptionCard from '../QR/EventDescriptionCard';
import RegistrationForm from '../QR/RegistrationForm';
import RegisterButton from '../QR/RegisterButton'; 
import QREventDetails from '../QR/QREventDetails';
import MainComponent from '../QR/MainComponent';

const EventDetail = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <MainComponent />
      <QREventDetails />
      <RegisterButton onClick={handleButtonClick} />
      <EventDescriptionCard />
      {showForm && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <RegistrationForm onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default EventDetail;
