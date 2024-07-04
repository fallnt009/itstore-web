import {createContext, useEffect, useReducer} from 'react';

import * as OrderApi from '../apis/order-api';

// import useAuth from '../hooks/useAuth';
import orderReducer, {
  FETCH_ORDER,
  INIT_ORDER,
  SELECT_ORDER,
} from '../reducers/orderReducer';

const OrderContext = createContext();

export default function OrderContextProvider({children}) {
  const [AllOrder, dispatch] = useReducer(orderReducer, INIT_ORDER);
  // const {authenUser} = useAuth();
  //fetch Order
  useEffect(() => {
    const fetchMyOrder = async () => {
      try {
        const res = await OrderApi.getMyOrder();

        dispatch({
          type: FETCH_ORDER,
          payload: {order: res.data?.result},
        });
      } catch (err) {
        console.log('error fetch');
      }
    };

    fetchMyOrder();
  }, []);

  //get checkout
  //create Order with Order detail
  //-find cart Item  check if empty
  //-createOrderDetails
  //get reciever address by checkout userAddress.Address
  //create Userpayment
  //put total price //assign payment id from checkout payment id
  //create order //userid,userPaymentId,orderDetailsId, total amount form

  const getOrderByNumber = async (orderNumber) => {
    try {
      const res = await OrderApi.getOrderByNumber(orderNumber);

      dispatch({
        type: SELECT_ORDER,
        payload: {
          selectedOrder: res.data?.result,
          orderItems: res.data?.product,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  //orderItems belong what order Id

  return (
    <OrderContext.Provider
      value={{
        order: AllOrder.order,
        orderItems: AllOrder.orderItems,
        selectedOrder: AllOrder.selectedOrder,
        getOrderByNumber,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export {OrderContext};
