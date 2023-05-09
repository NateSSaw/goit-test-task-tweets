import axios from 'axios';

axios.defaults.baseURL = 'https://6456da1e5f9a4f23614d2d7b.mockapi.io';

export const getUsers = async (page = 1) => {
  const response = await axios.get(`/tweets?page=${page}&limit=3`);
  return response.data;
};

export const updateUser = async user => {
  const response = await axios.put(`/tweets/${user.id}`, user);
  return response.data;
};
