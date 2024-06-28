import {useCallback, useEffect, useState} from 'react';
import {Link, useOutletContext} from 'react-router-dom';

import {HOME, CHECKOUT_SERVICES} from '../../config/routing';

import useAuth from '../../hooks/useAuth';
import useAddress from '../../hooks/useAddress';
import useCheckout from '../../hooks/useCheckout';

import CheckoutAddress from './CheckoutAddress';
import CAddressBox from './CAddressBox';
import CAddressUpdateForm from './CAddressUpdateForm';
import ActiveButton from '../../components/ActiveButton';

export default function CheckoutDetails() {
  const [select, setSelect] = useState(false);
  const [openDrawerWithContent, closeDrawer] = useOutletContext();

  const {authenUser} = useAuth();
  const {defaultAddress, updateAddress} = useAddress();
  const {checkout} = useCheckout();

  useEffect(() => {
    const hasDefaultAddress = Object.keys(defaultAddress || {}).length !== 0;
    if (hasDefaultAddress !== select) {
      setSelect(hasDefaultAddress);
    }
  }, [defaultAddress, select]);

  const handleEditClick = useCallback(() => {
    openDrawerWithContent(
      <CAddressUpdateForm
        defaultAddress={defaultAddress}
        onClose={closeDrawer}
        updateAddress={updateAddress}
      />
    );
  }, [defaultAddress, openDrawerWithContent, closeDrawer, updateAddress]);

  const handleChooseAddress = useCallback(() => {
    openDrawerWithContent(
      <CheckoutAddress
        openDrawerWithContent={openDrawerWithContent}
        setSelect={setSelect}
        onClose={closeDrawer}
      />
    );
  }, [openDrawerWithContent, setSelect, closeDrawer]);

  return (
    <div className="container grid ">
      <div className="mx-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-3xl">
            Please Inform Your Information
          </h1>
          <p>This Information will be use in the next process</p>
        </div>
        <div>
          <div className="flex justify-between items-center mt-5">
            <h4 className="font-semibold text-lg">Delivery Address</h4>
            <button
              className="font-semibold  rounded-full border border-black p-2 px-5 hover:border-2 max-w-24 max-h-10"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </div>
          <div className="flex flex-col gap-2 py-3">
            <CAddressBox
              defaultAddress={defaultAddress}
              setSelect={setSelect}
            />
            <div>
              <button
                className="flex justify-center items-center font-semibold p-3 rounded-full border border-black hover:border-2 max-h-12 "
                onClick={handleChooseAddress}
              >
                Choose another address
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <h4 className="font-semibold text-lg">Confirmation Email</h4>
            <p className="text-stone-600">{authenUser.email}</p>
            <p className="text-stone-600 text-xs ">
              Need to change? Please contact support.
            </p>
          </div>
          <div className=" border-t-2 mt-9 font-semibold ">
            <div className="flex flex-col  justify-center gap-3 mt-5">
              <ActiveButton
                select={select}
                to={CHECKOUT_SERVICES}
                activeTitle="Proceed to next"
                inActiveTitle="Proceed to next"
              />
              <Link
                to={HOME}
                className=" flex justify-center py-4 px-5 border-black "
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
