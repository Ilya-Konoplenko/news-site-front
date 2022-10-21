import api from './api';

export const getAllNews = async () => {
  const { data } = await api.get('/news');
  return data;
};

export const postNews = async (form) => {
  const { data } = await api.post('/news', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
