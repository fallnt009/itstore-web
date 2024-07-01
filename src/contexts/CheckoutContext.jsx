import {createContext, useCallback, useEffect, useReducer} from 'react';

import * as CheckoutApi from '../apis/checkout-api';

import checkoutReducer, {
  FETCH_CHECKOUT,
  FETCH_SERVICE,
  FETCH_PAYMENT,
  INIT_CHECKOUT,
  SELECT_SERVICE,
  SELECT_PAYMENT,
  UPDATE_CHECKOUT,
  CREATE_CHECKOUT,
  SELECT_ADDRESS,
} from '../reducers/checkoutReducer';

import useAddress from '../hooks/useAddress';

const CheckoutContext = createContext();

export default function CheckoutContextProvider({children}) {
  const [AllCheckout, dispatch] = useReducer(checkoutReducer, INIT_CHECKOUT);

  const {defaultAddress} = useAddress();

  //fetch
  const fetchMyCheckout = useCallback(async () => {
    try {
      const checkout = await CheckoutApi.getMyCheckout();
      const service = await CheckoutApi.getService();
      const payment = await CheckoutApi.getPayment();

      if (checkout.data?.result[0] !== AllCheckout.checkout) {
        dispatch({
          type: FETCH_CHECKOUT,
          payload: {checkout: checkout.data?.result[0]},
        });
      }
      if (service.data?.result !== AllCheckout.service) {
        dispatch({
          type: FETCH_SERVICE,
          payload: {service: service.data?.result},
        });
      }
      if (payment.data?.result !== AllCheckout.payment) {
        dispatch({
          type: FETCH_PAYMENT,
          payload: {payment: payment.data?.result},
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [AllCheckout]);

  useEffect(() => {
    fetchMyCheckout();
  }, []);

  //Create Checkout
  const createCheckout = async () => {
    try {
      const res = await CheckoutApi.createCheckout();

      dispatch({
        type: CREATE_CHECKOUT,
        payload: {checkout: res.data.result},
      });
    } catch (err) {
      console.log(err);
    }
  };
  const updateAddress = async (checkoutId, addressId) => {
    try {
      const data = {userAddressId: addressId};
      const res = await CheckoutApi.updateCheckout(checkoutId, data);

      dispatch({
        type: UPDATE_CHECKOUT,
        payload: {address: res.data?.result},
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateService = async (checkoutId, data) => {
    try {
      const res = await CheckoutApi.updateCheckout(checkoutId, data);

      dispatch({
        type: UPDATE_CHECKOUT,
        payload: {data: res.data?.result},
      });
    } catch (err) {
      console.log(err);
    }
  };
  const updatePayment = async (checkoutId, data) => {
    try {
      const res = await CheckoutApi.updateCheckout(checkoutId, data);
      dispatch({
        type: UPDATE_CHECKOUT,
        payload: {data: res.data?.result},
      });
    } catch (err) {
      console.log(err);
    }
  };

  //SELECT
  const selectAddress = (data) => {
    try {
      dispatch({
        type: SELECT_ADDRESS,
        payload: {selectedAddress: data},
      });
    } catch (err) {
      console.log(err);
    }
  };

  const selectService = (data) => {
    try {
      dispatch({
        type: SELECT_SERVICE,
        payload: {selectedService: data},
      });
    } catch (err) {
      console.log(err);
    }
  };
  const selectPayment = (data) => {
    try {
      dispatch({
        type: SELECT_PAYMENT,
        payload: {selectedPayment: data},
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        checkout: AllCheckout.checkout,
        service: AllCheckout.service,
        payment: AllCheckout.payment,
        selectedAddress: AllCheckout.selectedAddress,
        selectedService: AllCheckout.selectedService,
        selectedPayment: AllCheckout.selectedPayment,
        createCheckout,
        selectService,
        updateService,
        selectPayment,
        updatePayment,
        selectAddress,
        updateAddress,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export {CheckoutContext};
