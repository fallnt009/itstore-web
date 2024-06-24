import {useState} from 'react';
import {Link} from 'react-router-dom';

import {PARCEL_SERVICE} from '../../config/store';
import {CHECKOUT_PAYMENT} from '../../config/routing';

import useCheckout from '../../hooks/useCheckout';

import ActiveButton from '../../components/ActiveButton';

import CheckoutServiceItem from './CheckoutServiceItem';

export default function CheckoutServices() {
  const [select, setSelect] = useState(false);
  const [selectItem, setSelectItem] = useState({});

  const {selectParcel} = useCheckout();

  return (
    <div className="container grid ">
      <div className="mx-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-3xl">
            How would you like to receive your order?
          </h1>
          <p>Parcel Service info</p>
        </div>
        <div>
          {PARCEL_SERVICE.map((item) => (
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
                to={CHECKOUT_PAYMENT}
                activeTitle="Proceed to payment"
                inActiveTitle="Proceed to payment"
                onClick={() => selectParcel(selectItem)}
              />

              <Link
                to={'/checkout/details'}
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
