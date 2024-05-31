import axios from '../config/axios';

export const getMyCart = () => {
  return axios.get('/cart/mycart');
};
export const updateCartItem = (itemId, newQty) => {
  return axios.patch(`/cart/${itemId}/item`, {qty: newQty});
};

export const deletecartItem = (itemId) => {
  return axios.delete(`/cart/${itemId}/item`);
};

//addCart
