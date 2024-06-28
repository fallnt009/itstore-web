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
} from '../reducers/checkoutReducer';

const CheckoutContext = createContext();

export default function CheckoutContextProvider({children}) {
  const [AllCheckout, dispatch] = useReducer(checkoutReducer, INIT_CHECKOUT);

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
        selectedService: AllCheckout.selectedService,
        selectedPayment: AllCheckout.selectedPayment,
        selectService,
        updateService,
        selectPayment,
        updatePayment,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export {CheckoutContext};
