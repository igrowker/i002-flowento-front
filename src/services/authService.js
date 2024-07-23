import api from './api';

// Función de login
export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    console.log("Login response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error en el login:", error);
    throw error;
  }
};

// Función de registro
export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error("Error en el registro:", error);
    throw error;
  }
};

// Función de logout
export const logout = async () => {
  try {
    await api.get('/auth/logout');
    localStorage.removeItem('authToken');
  } catch (error) {
    console.error("Error en el logout:", error);
    throw error;
  }
};

// Función para recuperar contraseña
export const recoverPassword = async (email) => {
  try {
    const response = await api.post('/auth/recoverPassword', { email });
    return response.data;
  } catch (error) {
    console.error("Error en la recuperación de contraseña:", error);
    throw error;
  }
};

// Función para restablecer contraseña
export const resetPassword = async (email, password, confirmPassword) => {
  try {
    const response = await api.post('/auth/resetPassword', { email, password, confirmPassword });
    return response.data;
  } catch (error) {
    console.error("Error en el restablecimiento de contraseña:", error);
    throw error;
  }
};
