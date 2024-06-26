import {createContext, useEffect, useReducer} from 'react';

import * as OrderApi from '../apis/order-api';

// import useAuth from '../hooks/useAuth';
import orderReducer, {FETCH_ORDER, INIT_ORDER} from '../reducers/orderReducer';

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
  return (
    <OrderContext.Provider value={{order: AllOrder.order}}>
      {children}
    </OrderContext.Provider>
  );
}

export {OrderContext};
