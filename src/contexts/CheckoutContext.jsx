import {createContext, useState} from 'react';

const CheckoutContext = createContext();

export default function CheckoutContextProvider({children}) {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);

  //get addr to order_detail/reciever_addr
  //get parcel to order_detail/delivery_type
  //get payment method to user_payment/payment_type

  return (
    <CheckoutContext.Provider
      value={{
        setSelectedAddress,
        setSelectedPayment,
        setSelectedParcel,
        setOrderDetails,
        selectedAddress,
        selectedPayment,
        selectedParcel,
        orderDetails,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
