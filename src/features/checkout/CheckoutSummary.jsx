import {VAT_PERCENTAGE, DELIVERY_FEE} from '../../config/store';
import {NumericFormat} from 'react-number-format';

import CheckoutProduct from './CheckoutProduct';

export default function CheckoutSummary({userCart}) {
  //Calculate total price and items
  const totalItemPrice = userCart.reduce(
    (total, item) => total + parseFloat(item.Product.price) * item.qty,
    0
  );
  //define delivery and vat price
  const vatPrice = (totalItemPrice + DELIVERY_FEE) * (VAT_PERCENTAGE / 100);
  //Calculate total
  const realTotal = totalItemPrice + DELIVERY_FEE + vatPrice;

  return (
    <div className="container">
      <div className="flex flex-col gap-5 mx-5 my-20">
        <div className="flex flex-col gap-1 py-4">
          <div className="flex  justify-between font-semibold">
            <h4> Total Price</h4>
            <h4>
              <NumericFormat
                value={realTotal}
                displayType="text"
                thousandSeparator=","
              />{' '}
              THB
            </h4>
          </div>
          <p className="text-sm text-stone-600">Already included vat 7%</p>
        </div>
        <div className="flex flex-col gap-1 border-t-2  py-4">
          <h4 className="font-semibold">Delivery Information</h4>
          <div>My Address</div>
        </div>
        <div className="flex flex-col gap-1 border-t-2  py-4">
          <h4 className="font-semibold">Delivery Method</h4>
          <div>For preview parcel</div>
        </div>
        <CheckoutProduct userCart={userCart} />
      </div>
    </div>
  );
}
