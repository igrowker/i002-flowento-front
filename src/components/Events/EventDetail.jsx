import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import EventDescriptionCard from '../QR/EventDescriptionCard';
import RegistrationForm from '../QR/RegistrationForm';
import RegisterButton from '../QR/RegisterButton';
import QREventDetails from '../QR/QREventDetails';
import MainComponent from '../QR/MainComponent';
import ArrowLeft from '../QR/ArrowLeft';

const EventDetail = () => {
  const [showForm, setShowForm] = useState(false);
  const [event, setEvent] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/events/${id}`, { withCredentials: true });
        setEvent(response.data.payload);
      } catch (error) {
        console.error("Error al cargar los detalles del evento:", error);
      }
    };

    fetchEventDetails();
  }, [id]);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <MainComponent />
      <QREventDetails />
      <RegisterButton onClick={handleButtonClick} />
      <EventDescriptionCard />
      <ArrowLeft to="/event-list" />
      
      {/* Evento Detalles */}
      <div>
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        <img src={event.image} alt={event.name} />
      </div>
      
      {/* Formulario de Registro */}
      {showForm && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <RegistrationForm onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default EventDetail;