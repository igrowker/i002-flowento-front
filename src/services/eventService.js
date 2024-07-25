import api from './api';

// Obtener Todos los Eventos
export const getEvents = async () => {
  try {
    const response = await api.get('events/');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los eventos:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Obtener Evento por ID
export const getEventById = async (id) => {
  try {
    const response = await api.get(`events/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el evento por ID:', error);
    throw error;
  }
};

// Crear Evento
export const createEvent = async (eventData) => {
  try {
    const response = await api.post('events/', eventData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el evento:', error);
    throw error;
  }
};

// Actualizar Evento
export const updateEvent = async (id, eventData) => {
  try {
    const response = await api.put(`events/${id}`, eventData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el evento:', error);
    throw error;
  }
};

// Eliminar Evento
export const deleteEvent = async (id) => {
  try {
    const response = await api.delete(`events/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el evento:', error);
    throw error;
  }
};

// Registrarse para un Evento
export const registerForEvent = async (name, email, eventId) => {
  try {
    const response = await api.post('events/register', {name, email, eventId });
    return response.data;
  } catch (error) {
    console.error('Error al registrarse para el evento:', error);
    throw error;
  }
};

// Feedback para un Evento
export const giveFeedback = async (eventId) => {
  try {
    const response = await api.post('events/feedback', { eventId });
    return response.data;
  } catch (error) {
    console.error('Error al enviar el Feedback:', error);
    throw error;
  }
};
