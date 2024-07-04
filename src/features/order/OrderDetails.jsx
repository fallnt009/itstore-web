import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import OrderHeader from './OrderHeader';
import OrderDetailsProduct from './OrderDetailsProduct';
import OrderSummary from './OrderSummary';
import OrderDelivery from './OrderDelivery';
import OrderDeliveryInfo from './OrderDeliveryInfo';
import OrderPaymentStatus from './OrderPaymentStatus';

import useOrder from '../../hooks/useOrder';

export default function OrderDetails() {
  const {orderNumber: orderParams} = useParams();
  const {selectedOrder, orderItems, getOrderByNumber} = useOrder();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        await getOrderByNumber(orderParams);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrder();
  }, [orderParams]);

  const {orderStatus, createdAt, totalAmount, OrderDetail, UserPayment} =
    selectedOrder || {};

  return (
    <div className="container">
      <div className="grid mx-24 border-2  rounded-2xl p-6">
        <OrderHeader
          OrderDetail={OrderDetail}
          orderStatus={orderStatus}
          createdAt={createdAt}
        />
        <div className="overflow-y-auto max-h-[75vh] ">
          {orderItems.map((el) => (
            <OrderDetailsProduct key={el.id} item={el} />
          ))}
        </div>
        <div className="grid grid-cols-2 border-t-2 py-5">
          <OrderPaymentStatus UserPayment={UserPayment} />
          <OrderDelivery OrderDetail={OrderDetail} />
        </div>
        <div className="grid grid-cols-2 border-t-2 py-5">
          <OrderDeliveryInfo OrderDetail={OrderDetail} />
          <OrderSummary totalAmount={totalAmount} OrderDetail={OrderDetail} />
        </div>
      </div>
    </div>
  );
}
