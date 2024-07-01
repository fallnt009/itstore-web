import {useEffect, useState} from 'react';

import useAddress from '../../hooks/useAddress';
import useCheckout from '../../hooks/useCheckout';
import useLoading from '../../hooks/useLoading';

import CheckoutAddressList from '../checkout/CheckoutAddressList';
import CAddressForm from './CAddressForm';

export default function CheckoutAddress({
  openDrawerWithContent,
  onClose,
  setSelect,
}) {
  const {address, addAddress, defaultAddress, setDefaultAddress} = useAddress();
  const {checkout, updateAddress} = useCheckout();
  const {startLoading, stopLoading} = useLoading();

  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    //if address not default
    if (defaultAddress) {
      setSelectedId(defaultAddress.id);
    } else {
      setSelectedId();
    }
  }, [defaultAddress]);

  const handleAddAddress = async (addressId) => {
    startLoading();
    try {
      setDefaultAddress(addressId);
      setSelect(true);
      await updateAddress(checkout.id, addressId);
      onClose();
    } catch (err) {
      console.log('add error');
    } finally {
      stopLoading();
    }
  };

  //find that not default
  const isDefaultAddress = selectedId === defaultAddress?.id;

  return (
    <div className="flex flex-col mx-5">
      <header className="flex flex-col p-5 font-semibold text-lg mx-5">
        <h4 className="flex justify-center p-2 pb-5">Your saved Address</h4>
      </header>
      <div className="flex flex-col mx-5">
        <button
          className="font-semibold  rounded-full border py-4 px-5 border-black mt-5 hover:border-2"
          onClick={() =>
            openDrawerWithContent(
              <CAddressForm onClose={onClose} addAddress={addAddress} />
            )
          }
        >
          Add new address
        </button>
        <div className="py-8">
          {address && address.length > 0 ? (
            <CheckoutAddressList
              address={address}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
            />
          ) : (
            <div className="flex justify-center text-stone-600">
              Your saved address is empty. Please add new address
            </div>
          )}
        </div>

        {selectedId && !isDefaultAddress ? (
          <button
            type="submit"
            className="flex justify-center rounded-full border-2 py-4 px-5 text-white bg-cerulean-blue-800 font-semibold"
            onClick={() => handleAddAddress(selectedId)}
          >
            Use this address as default
          </button>
        ) : (
          <div className="flex justify-center rounded-full border-2 py-4 px-5  bg-stone-300 text-stone-500 ">
            Use this address as default
          </div>
        )}
      </div>
    </div>
  );
}
