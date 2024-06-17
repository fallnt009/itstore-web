import useAddress from '../../hooks/useAddress';

import CheckoutAddressList from '../checkout/CheckoutAddressList';
import CAddressForm from './CAddressForm';

export default function CheckoutAddress({openDrawerWithContent, onClose}) {
  const {address, addAddress, selectedAddress, setDefaultAddress} =
    useAddress();

  const handleAddAddress = async (addressId) => {
    setDefaultAddress(addressId);
    onClose();
  };

  const {id} = selectedAddress;

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
            <CheckoutAddressList address={address} />
          ) : (
            <div className="flex justify-center text-stone-600">
              Your saved address is empty. Please add new address
            </div>
          )}
        </div>
        <button
          type="submit"
          className="flex justify-center rounded-full border-2 py-4 px-5 text-white bg-cerulean-blue-800 font-semibold"
          onClick={() => handleAddAddress(id)}
        >
          Use this address
        </button>
      </div>
    </div>
  );
}