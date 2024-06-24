import {
  FETCH_ADDRESS,
  ADD_ADDRESS,
  EDIT_ADDRESS,
  DELETE_ADDRESS,
  SET_DEFAULT_ADDRESS,
} from './addressType';

export function fetchAddress(address) {
  return {
    type: FETCH_ADDRESS,
    payload: {address},
  };
}
export function addAddress(newAddress) {
  return {
    type: ADD_ADDRESS,
    payload: {newAddress},
  };
}
export function editAddress(id, updatedAddress) {
  return {
    type: EDIT_ADDRESS,
    payload: {id, updatedAddress},
  };
}
export function deleteAddress(id) {
  return {
    type: DELETE_ADDRESS,
    payload: {id},
  };
}
export function setDefaultAddress(address) {
  return {
    type: SET_DEFAULT_ADDRESS,
    payload: {address},
  };
}
