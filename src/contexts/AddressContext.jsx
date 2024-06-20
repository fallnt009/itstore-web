import {createContext, useEffect, useReducer} from 'react';
import * as AddressApi from '../apis/address-api';

import useLoading from '../hooks/useLoading';

import addressReducer, {
  ADD_ADDRESS,
  EDIT_ADDRESS,
  SET_DEFAULT_ADDRESS,
} from '../reducers/addressReducer';
import {INIT_ADDRESS, FETCH_ADDRESS} from '../reducers/addressReducer';

const AddressContext = createContext();

export default function AddressContextProvider({children}) {
  const [AllAddress, dispatch] = useReducer(addressReducer, INIT_ADDRESS);

  const {startLoading, stopLoading} = useLoading();

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
    fetchMyAddress();
  }, []);

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

  //set default
  const setDefaultAddress = async (addressId) => {
    try {
      startLoading();
      const res = await AddressApi.updateDefault(addressId);
      dispatch({
        type: SET_DEFAULT_ADDRESS,
        payload: {address: res.data.result},
      });
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };
  //selectAddress

  return (
    <AddressContext.Provider
      value={{
        address: AllAddress.address,
        defaultAddress: AllAddress.defaultAddress,
        addAddress,
        updateAddress,
        setDefaultAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export {AddressContext};
