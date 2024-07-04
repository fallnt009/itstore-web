import axios from '../config/axios';

export const getMyOrder = () => {
  return axios.get('/order/myorder');
};

export const getOrderByNumber = (orderNumber) => {
  return axios.get(`/order/findorder/${orderNumber}`);
};
