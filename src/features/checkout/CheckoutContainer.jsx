import {Outlet} from 'react-router-dom';

import CheckoutBreadCrumb from './CheckoutBreadCrumb';
import CheckoutSummary from './CheckoutSummary';

import useCart from '../../hooks/useCart';

export default function CheckoutContainer() {
  const {userCart} = useCart();

  return (
    <div className="container ">
      <div className=" grid my-10 p-16">
        <div className="flex justify-center p-5 ">
          <CheckoutBreadCrumb />
        </div>
        <div className="grid grid-cols-[2fr_1fr] p-5">
          <Outlet />
          <CheckoutSummary userCart={userCart} />
        </div>
      </div>
    </div>
  );
}
