import {format} from 'date-fns';

export default function OrderHistoryItem({order, setOrderNum}) {
  const {
    orderStatus,
    totalAmount,
    createdAt,
    OrderDetail: {orderNumber},
  } = order;

  return (
    <div className="grid  grid-cols-5 py-3 border-b-2">
      <h4>{orderNumber}</h4>
      <h4>{format(new Date(createdAt), 'dd/MM/yyyy')}</h4>
      <h4>{totalAmount}</h4>
      <h4>{orderStatus}</h4>

      <button onClick={() => setOrderNum(orderNumber)}>View Order</button>
    </div>
  );
}
