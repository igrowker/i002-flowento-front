import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

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

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <img src={event.image} alt={event.name} />
    </div>
  );
};

export default EventDetail;
