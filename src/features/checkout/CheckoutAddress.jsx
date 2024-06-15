import {useEffect, useState} from 'react';

import * as AddressApi from '../../apis/address-api';

import CheckoutAddressList from '../checkout/CheckoutAddressList';

export default function CheckoutAddress() {
  const [address, setAddress] = useState([]);

  //Fetch User Address
  useEffect(() => {
    const fetchMyAddress = async () => {
      try {
        const res = await AddressApi.getMyAddress();
        setAddress(res.data.result);
      } catch (err) {
        console.log('error fetch address');
      }
    };
    fetchMyAddress();
  }, []);

  return (
    <div>
      <CheckoutAddressList address={address} />
    </div>
  );
}
