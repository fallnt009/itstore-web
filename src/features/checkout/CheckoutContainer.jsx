import {Outlet} from 'react-router-dom';

import CheckoutBreadCrumb from './CheckoutBreadCrumb';
import CheckoutSummary from './CheckoutSummary';

import SideDrawer from '../../components/SideDrawer';

import useDrawer from '../../hooks/useDrawer';
import useCart from '../../hooks/useCart';
import useAddress from '../../hooks/useAddress';
import useCheckout from '../../hooks/useCheckout';

export default function CheckoutContainer() {
  const {closeDrawer, isOpen, drawerContent} = useDrawer();
  const {userCart} = useCart();
  const {defaultAddress} = useAddress();
  const {checkout} = useCheckout();

  return (
    <div className="container ">
      <div className=" grid my-10 p-16">
        <div className="flex justify-center p-5 ">
          <CheckoutBreadCrumb />
        </div>
        <div className="grid grid-cols-[2fr_1fr] p-5">
          <Outlet />
          <CheckoutSummary
            checkout={checkout}
            userCart={userCart}
            defaultAddress={defaultAddress}
          />
        </div>
        <SideDrawer isOpen={isOpen} onClose={closeDrawer}>
          {drawerContent}
        </SideDrawer>
      </div>
    </div>
  );
}
