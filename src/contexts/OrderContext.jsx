import {createContext, useCallback, useReducer} from 'react';

import * as OrderApi from '../apis/order-api';

import useAuth from '../hooks/useAuth';

import orderReducer, {
  FETCH_ORDER,
  INIT_ORDER,
  SELECT_ORDER,
  SELECT_ORDER_LIST,
} from '../reducers/orderReducer';

const OrderContext = createContext();

export default function OrderContextProvider({children}) {
  const [AllOrder, dispatch] = useReducer(orderReducer, INIT_ORDER);

  //fetch Order

  const fetchMyOrder = useCallback(async () => {
    try {
      const res = await OrderApi.getMyOrder();

      dispatch({
        type: FETCH_ORDER,
        payload: {order: res.data?.result},
      });
    } catch (err) {
      console.log('error fetch');
    }
  }, []);

  //get checkout
  //create Order with Order detail
  //-find cart Item  check if empty
  //-createOrderDetails
  //get reciever address by checkout userAddress.Address
  //create Userpayment
  //put total price //assign payment id from checkout payment id
  //create order //userid,userPaymentId,orderDetailsId, total amount form
  const createOrder = async (data) => {
    try {
      await OrderApi.createOrder(data);
      console.log('create order success');
    } catch (err) {
      console.log(err);
    }
  };

  const updateOrder = async () => {
    //need to
    try {
    } catch (err) {
      console.log(err);
    }
  };

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
      throw err;
    }
  };

  //for order filters
  const selectOrderList = (selectIndex) => {
    dispatch({type: SELECT_ORDER_LIST, payload: selectIndex});
  };
  //make order history can order in desc or asce

  return (
    <OrderContext.Provider
      value={{
        order: AllOrder.order,
        orderFilter: AllOrder.orderFilter,
        orderItems: AllOrder.orderItems,
        selectedOrder: AllOrder.selectedOrder,
        getOrderByNumber,
        selectOrderList,
        createOrder,
        fetchMyOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export {OrderContext};
