import api from './api';

// Get All Events
export const getEvents = async () => {
  const response = await api.get('/events/');
  return response.data;
};

// Get Event by ID
export const getEventById = async (id) => {
  const response = await api.get(`/events/${id}`);
  return response.data;
};

// Create Event
export const createEvent = async (eventData) => {
  const response = await api.post('/events/', eventData);
  return response.data;
};

// Update Event
export const updateEvent = async (id, eventData) => {
  const response = await api.put(`/events/${id}`, eventData);
  return response.data;
};

// Delete Event
export const deleteEvent = async (id) => {
  const response = await api.delete(`/events/${id}`);
  return response.data;
};

// Register for Event
export const registerForEvent = async (eventId) => {
  const response = await api.post('/events/register', { eventId });
  return response.data;
};

// Feedback for Event
export const giveFeedback = async (eventId) => {
  const response = await api.post('/events/feedback', { eventId });
  return response.data;
};
