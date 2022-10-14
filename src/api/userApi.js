import api from './api';

const getUserData = async (id) => {
  const { data } = await api.get(`/user/${id}`);
  return data;
};

export default getUserData;
