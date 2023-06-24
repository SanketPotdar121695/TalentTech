import instance from '../../utils/axiosInstance';

export const getUserData = async (userData) => {
  return await instance.post('/users/login', userData);
};

export const logoutUser = async () => {
  return await instance.get('/users/logout');
};
