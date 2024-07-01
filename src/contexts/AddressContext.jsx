import {createContext, useEffect, useReducer} from 'react';
import * as AddressApi from '../apis/address-api';

import useAuth from '../hooks/useAuth';

import addressReducer, {
  INIT_ADDRESS,
  FETCH_ADDRESS,
  ADD_ADDRESS,
  DELETE_ADDRESS,
  EDIT_ADDRESS,
  SET_DEFAULT_ADDRESS,
} from '../reducers/addressReducer';

const AddressContext = createContext();

export default function AddressContextProvider({children}) {
  const [AllAddress, dispatch] = useReducer(addressReducer, INIT_ADDRESS);

  const {authenUser} = useAuth();

  //fetch address
  useEffect(() => {
    const fetchMyAddress = async () => {
      try {
        const res = await AddressApi.getMyAddress();

        dispatch({
          type: FETCH_ADDRESS,
          payload: {address: res.data?.result},
        });
      } catch (err) {
        console.log('error fetch address');
      }
    };
    if (authenUser) {
      fetchMyAddress();
    }
  }, [authenUser]);

  //create Address
  const addAddress = async (newAddress) => {
    try {
      const res = await AddressApi.createAddress(newAddress);
      dispatch({
        type: ADD_ADDRESS,
        payload: {newAddress: res.data.result},
      });
    } catch (err) {
      console.log(err);
    }
  };

  //update Address
  const updateAddress = async (addressId, updatedAddress) => {
    try {
      const res = await AddressApi.updateAddress(addressId, updatedAddress);
      dispatch({
        type: EDIT_ADDRESS,
        payload: {id: addressId, updatedAddress: res.data.result},
      });
    } catch (err) {
      console.log(err);
    }
  };

  //delete Address
  const deleteAddress = async (addressId) => {
    try {
      await AddressApi.deleteAddress(addressId);
      dispatch({
        type: DELETE_ADDRESS,
        payload: {id: addressId},
      });
    } catch (err) {
      console.log(err);
    }
  };

  //set default
  const setDefaultAddress = async (addressId) => {
    try {
      const res = await AddressApi.updateDefault(addressId);
      dispatch({
        type: SET_DEFAULT_ADDRESS,
        payload: {address: res.data.result},
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        address: AllAddress.address,
        defaultAddress: AllAddress.defaultAddress,
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export {AddressContext};
