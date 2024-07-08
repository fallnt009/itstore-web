import {useNavigate} from 'react-router-dom';
import {ORDER_DETAIL} from '../../config/routing';

import OrderHistoryHeader from './OrderHistoryHeader';
import OrderHistoryList from './OrderHistoryList';

import useOrder from '../../hooks/useOrder';
import useLoading from '../../hooks/useLoading';

export default function OrderHistory() {
  const {orderFilter} = useOrder();
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
      <div className="grid grid-cols-[1fr_3fr] mx-24 ">
        <OrderHistoryHeader />
        <OrderHistoryList
          orderFilter={orderFilter}
          onClickOrder={handleOnClickOrder}
        />
      </div>
    </div>
  );
}
