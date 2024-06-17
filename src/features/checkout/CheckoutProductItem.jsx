import {NumericFormat} from 'react-number-format';

export default function CheckoutProductItem({product, qty}) {
  const {title, price} = product;
  return (
    <div className="border-b py-7">
      <div className="flex justify-between ">
        <div className="font-bold"> {title}</div>
        <div className="font-bold">
          <NumericFormat
            value={price}
            displayType="text"
            thousandSeparator=","
          />{' '}
          <span>THB</span>
        </div>
      </div>
      <div className="flex gap-2 pt-3">
        <p className="text-stone-600">Qty :</p>
        {qty}
      </div>
    </div>
  );
}
