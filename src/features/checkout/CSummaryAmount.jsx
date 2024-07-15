import {NumericFormat} from 'react-number-format';

export default function CSummaryAmount({
  totalPrice = 0,
  vatAmount = 0,
  itemsPrice = 0,
  serviceFee = 0,
}) {
  return (
    <>
      <div className="flex  justify-between font-semibold">
        <h4>Sub Total</h4>
        <h4>
          <NumericFormat
            value={itemsPrice}
            displayType="text"
            thousandSeparator=","
          />{' '}
          THB
        </h4>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-stone-600">Vat</p>
        <p className="text-sm text-stone-600">
          <NumericFormat
            value={vatAmount.toFixed(1)}
            displayType="text"
            thousandSeparator=","
          />{' '}
          THB
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-stone-600">Delivery Fee</p>
        <p className="text-sm text-stone-600">
          <NumericFormat
            value={serviceFee}
            displayType="text"
            thousandSeparator=","
          />{' '}
          THB
        </p>
      </div>
      <div className="flex  justify-between font-semibold">
        <h4> Total Price</h4>
        <h4>
          <NumericFormat
            value={totalPrice}
            displayType="text"
            thousandSeparator=","
          />{' '}
          THB
        </h4>
      </div>
    </>
  );
}
