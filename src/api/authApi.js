import api from './api';

export const loginRequest = async (payload) => {
  const { data } = await api.post('auth/login', payload);
  return data;
};

export const signupRequest = async (payload) => {
  const { data } = await api.post('auth/signup', payload);
  return data;
};
