import api from './api';

export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (first_name, last_name, email, password, passwordRepeat) => {
  const response = await api.post('/auth/register', { first_name, last_name, email, password, passwordRepeat });
  return response.data;
};

export const logout = async () => {
  const response = await api.get('/auth/logout');
  return response.data;
};

export const recoverPassword = async (email) => {
  const response = await api.post('/auth/recoverPassword', { email });
  return response.data;
};

export const resetPassword = async (email, password, confirmPassword) => {
  const response = await api.post('/auth/resetPassword', { email, password, confirmPassword });
  return response.data;
};
