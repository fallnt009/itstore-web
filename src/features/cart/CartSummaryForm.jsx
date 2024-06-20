import {Link} from 'react-router-dom';
import {NumericFormat} from 'react-number-format';

import {VAT_PERCENTAGE, DELIVERY_FEE} from '../../config/store';

export default function CartSummaryForm({cart, totalItem}) {
  //Calculate total price and items
  const totalItemPrice = cart.reduce(
    (total, item) => total + parseFloat(item.Product.price) * item.qty,
    0
  );
  //define delivery and vat price
  const vatPrice = (totalItemPrice + DELIVERY_FEE) * (VAT_PERCENTAGE / 100);
  //Calculate total
  const realTotal = totalItemPrice + DELIVERY_FEE + vatPrice;

  return (
    <div className="container">
      <div className=" flex flex-col mx-7">
        <div className="text-2xl font-bold">Cart Summary</div>
        {/* Show product and price */}
        <div className=" text-stone-700 text-md mt-5 ">
          <div className="flex justify-between">
            <div>Products({totalItem})</div>
            {/* price total */}
            <div>
              <NumericFormat
                value={totalItemPrice}
                displayType="text"
                thousandSeparator=","
              />{' '}
              THB
            </div>
          </div>
          <div className="flex justify-between">
            <div>Delivery price</div>
            <div>
              <NumericFormat
                value={DELIVERY_FEE}
                displayType="text"
                thousandSeparator=","
              />{' '}
              THB
            </div>
          </div>
          <div className="flex justify-between">
            <div>Vat {VAT_PERCENTAGE}%</div>
            <div>
              <NumericFormat
                value={vatPrice}
                displayType="text"
                thousandSeparator=","
              />{' '}
              THB
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t-2 border-black mt-5 pt-5 text-2xl font-semibold items-baseline">
          <div>Total</div>
          <div className="flex gap-1 items-baseline">
            <div className="text-3xl">
              <NumericFormat
                value={realTotal}
                displayType="text"
                thousandSeparator=","
              />
            </div>
            <div className=" flex text-sm items-end">THB</div>
          </div>
        </div>
        <div className="text-stone-700 text-sm mt-5 ">
          By clicking "check out" to proceed your order
        </div>
        <Link
          to={'/checkout/details'}
          className="flex justify-center font-bold text-sm bg-cerulean-blue-800 px-6 py-5 rounded-full text-white mt-5"
        >
          <div className="text-lg">Go to Checkout</div>
        </Link>
      </div>
    </div>
  );
}
