import {useNavigate} from 'react-router-dom';
import {ORDER_DETAIL} from '../../config/routing';

import OrderHistoryItem from './OrderHistoryItem';

import useOrder from '../../hooks/useOrder';
import useLoading from '../../hooks/useLoading';

export default function OrderHistory() {
  const {order} = useOrder();
  const {startLoading, stopLoading} = useLoading();

  const navigate = useNavigate();

  const handleOnClickOrder = async (orderNumber) => {
    startLoading();
    try {
      navigate(ORDER_DETAIL(orderNumber));
      navigate(0);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="container">
      <div className="grid mx-24 border">
        <div>
          <h1 className="font-semibold text-3xl">My Order</h1>
        </div>
        <div className="flex gap-4 text-xl">
          <h1>Pending</h1>
          <h1>Processing</h1>
          <h1>Completed</h1>
        </div>
        <div className="grid  grid-cols-5 py-2 border-b-2">
          <h4>Order Number</h4>
          <h4>Order Date</h4>
          <h4>Total</h4>
          <h4>Status</h4>
          <h4>Action</h4>
        </div>
        {order.map((item) => (
          <OrderHistoryItem
            key={item.id}
            order={item}
            setOrderNum={handleOnClickOrder}
          />
        ))}
      </div>
    </div>
  );
}
