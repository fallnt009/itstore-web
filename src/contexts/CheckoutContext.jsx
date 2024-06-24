import {createContext, useReducer} from 'react';

import checkoutReducer, {
  INIT_CHECKOUT,
  SELECT_ADDRESS,
  SELECT_CART,
  SELECT_PARCEL,
  SELECT_PAYMENT,
} from '../reducers/checkoutReducer';

const CheckoutContext = createContext();

export default function CheckoutContextProvider({children}) {
  const [AllCheckout, dispatch] = useReducer(checkoutReducer, INIT_CHECKOUT);

  //get CART
  const selectCart = (input) => {
    try {
      dispatch({
        type: SELECT_CART,
        payload: {cart: input},
      });
    } catch (err) {
      console.log(err);
    }
  };

  //get ADDRESS
  const selectAddress = (input) => {
    try {
      dispatch({
        type: SELECT_ADDRESS,
        payload: {address: input},
      });
    } catch (err) {
      console.log(err);
    }
  };
  //get PARCEL
  const selectParcel = (input) => {
    try {
      dispatch({
        type: SELECT_PARCEL,
        payload: {parcel: input},
      });
    } catch (err) {
      console.log(err);
    }
  };
  //get PAYMENT
  const selectPayment = (input) => {
    try {
      dispatch({
        type: SELECT_PAYMENT,
        payload: {payment: input},
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        finalCart: AllCheckout.selectedCart,
        finalAddress: AllCheckout.selectedAddress,
        finalParcel: AllCheckout.selectedParcel,
        finalPayment: AllCheckout.selectedPayment,
        selectCart,
        selectAddress,
        selectParcel,
        selectPayment,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export {CheckoutContext};
