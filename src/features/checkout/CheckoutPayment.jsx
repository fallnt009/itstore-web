import {useState} from 'react';
import {Link} from 'react-router-dom';

import CheckoutPaymentItem from './CheckoutPaymentItem';

export default function CheckoutPayment() {
  const [select, setSelect] = useState(false);

  return (
    <div className="container grid ">
      <div className="mx-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-3xl">How would you like to pay?</h1>
        </div>
        <div>
          <CheckoutPaymentItem select={select} setSelect={setSelect} />
          <div className=" border-t-2 mt-9 font-semibold ">
            <div className="flex flex-col justify-center gap-3 mt-5">
              {select ? (
                <Link className="flex justify-center rounded-full border-2 py-4 px-5 text-white bg-cerulean-blue-800  ">
                  Proceed to payment
                </Link>
              ) : (
                <div className="flex justify-center rounded-full border-2 py-4 px-5  bg-stone-300 text-stone-500 ">
                  Proceed to payment
                </div>
              )}
              <Link
                to={'/checkout/services'}
                className="flex justify-center py-4 px-5 border-black "
              >
                Back to Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
