import {useState} from 'react';
import {Outlet} from 'react-router-dom';

import CheckoutBreadCrumb from './CheckoutBreadCrumb';
import CheckoutSummary from './CheckoutSummary';

import useCart from '../../hooks/useCart';
import SideDrawer from '../../components/SideDrawer';
import useAddress from '../../hooks/useAddress';

export default function CheckoutContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);

  const {userCart} = useCart();
  const {defaultAddress} = useAddress();

  const openDrawerWithContent = (content) => {
    setDrawerContent(content);
    setIsOpen(true);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div className="container ">
      <div className=" grid my-10 p-16">
        <div className="flex justify-center p-5 ">
          <CheckoutBreadCrumb />
        </div>
        <div className="grid grid-cols-[2fr_1fr] p-5">
          <Outlet context={[openDrawerWithContent, closeDrawer]} />
          <CheckoutSummary
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
