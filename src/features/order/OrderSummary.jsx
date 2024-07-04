import {NumericFormat} from 'react-number-format';

import {VAT_PERCENTAGE} from '../../config/store';

export default function OrderSummary({totalAmount, OrderDetail}) {
  const servicePrice = OrderDetail?.Service?.price;

  const taxCal =
    (Number(totalAmount) + Number(servicePrice)) * (VAT_PERCENTAGE / 100);
  const totalPrice =
    Number(totalAmount) + Number(servicePrice) + parseInt(taxCal);

  return (
    <div>
      <h4 className="font-semibold">Order Summary</h4>
      <div className="flex flex-col gap-2 py-2 ">
        <div className="flex justify-between gap-2 text-lg text-stone-700">
          <h4>Sub Total</h4>
          <p>
            <NumericFormat
              value={totalAmount}
              displayType="text"
              thousandSeparator=","
            />{' '}
            THB
          </p>
        </div>
        <div className="flex justify-between gap-2 text-sm text-stone-500">
          <h4>Delivery</h4>
          <p>
            <NumericFormat
              value={servicePrice}
              displayType="text"
              thousandSeparator=","
            />{' '}
            THB
          </p>
        </div>
        <div className="flex justify-between gap-2 text-sm text-stone-500">
          <h4>Tax</h4>
          <p>
            <NumericFormat
              value={parseInt(taxCal)}
              displayType="text"
              thousandSeparator=","
            />{' '}
            THB
          </p>
        </div>
        <div className="flex justify-between gap-2 text-lg border-t-2 py-3 text-stone-700">
          <h4>Total</h4>
          <p className="font-semibold">
            <NumericFormat
              value={totalPrice}
              displayType="text"
              thousandSeparator=","
            />{' '}
            THB
          </p>
        </div>
      </div>
    </div>
  );
}
