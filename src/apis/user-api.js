import axios from '../config/axios';

export const updateProfileImage = (formData) => {
  return axios.patch('/users/updateimg', formData);
};
