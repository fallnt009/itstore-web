import {Link, useOutletContext} from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import useAddress from '../../hooks/useAddress';

import CheckoutAddress from './CheckoutAddress';
import CAddressBox from './CAddressBox';

export default function CheckoutDetails() {
  const [openDrawerWithContent, closeDrawer] = useOutletContext();

  const {authenUser} = useAuth();
  const {selectedAddress} = useAddress();

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
            <button className="font-semibold  rounded-full border border-black p-2 px-5 hover:border-2">
              Edit
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <CAddressBox selectedAddress={selectedAddress} />
            <button
              className="font-semibold  rounded-full border py-4 px-5 border-black mt-5 hover:border-2"
              onClick={() =>
                openDrawerWithContent(
                  <CheckoutAddress
                    openDrawerWithContent={openDrawerWithContent}
                    onClose={closeDrawer}
                  />
                )
              }
            >
              Choose another address
            </button>
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
              <Link
                to={'/checkout/services'}
                className="flex justify-center rounded-full border-2 py-4 px-5 text-white bg-cerulean-blue-800  "
              >
                Proceed to next
              </Link>
              <Link
                to={'/'}
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
