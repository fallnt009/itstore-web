import {useState} from 'react';
import {Link} from 'react-router-dom';

import {PAYMENT_METHOD} from '../../config/store';
import useCheckout from '../../hooks/useCheckout';

import ActiveButton from '../../components/ActiveButton';

import CheckoutServiceItem from './CheckoutServiceItem';

export default function CheckoutPayment() {
  const [select, setSelect] = useState(false);
  const [selectItem, setSelectItem] = useState({});

  const {selectPayment} = useCheckout();

  console.log(selectItem);

  return (
    <div className="container grid ">
      <div className="mx-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-3xl">How would you like to pay?</h1>
        </div>
        <div>
          {PAYMENT_METHOD.map((item) => (
            <CheckoutServiceItem
              select={select}
              setSelect={setSelect}
              setSelectItem={setSelectItem}
              item={item}
              key={item.id}
            />
          ))}
          <div className=" border-t-2 mt-9 font-semibold ">
            <div className="flex flex-col justify-center gap-3 mt-5">
              <ActiveButton
                select={select}
                to={''}
                activeTitle="Proceed to payment"
                inActiveTitle="Proceed to payment"
                onClick={() => selectPayment(selectItem)}
              />

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
