import axios from '../config/axios';

export const getMyOrder = () => {
  return axios.get('/order/myorder');
};
