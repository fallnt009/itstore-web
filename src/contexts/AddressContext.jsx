import {createContext, useState, useEffect} from 'react';

import useLoading from '../hooks/useLoading';

import * as AddressApi from '../apis/address-api';

const AddressContext = createContext();

export default function AddressContextProvider({children}) {
  //address data and selected address
  const [address, setAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState({});

  const {startLoading, stopLoading} = useLoading();

  //fetch address
  useEffect(() => {
    const fetchMyAddress = async () => {
      try {
        const res = await AddressApi.getMyAddress();
        const address = res.data.result;
        setAddress(address);
        // const defaultAddress = address.find((el) => el.UserAddresses);
        // console.log(defaultAddress);
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
      const createdAddress = res.data.result;
      setAddress([...address, createdAddress]);
    } catch (err) {
      console.log(err);
    }
  };

  //update Address

  //set default
  const setDefaultAddress = async (addressId) => {
    try {
      startLoading();
      const res = await AddressApi.updateDefault(addressId);
      setSelectedAddress(res.data.result);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };
  //delete Address

  return (
    <AddressContext.Provider
      value={{
        address,
        selectedAddress,
        setSelectedAddress,
        addAddress,
        setDefaultAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export {AddressContext};
