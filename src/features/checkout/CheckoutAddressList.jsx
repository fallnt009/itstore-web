import useAddress from '../../hooks/useAddress';

import CheckoutAddressItem from './CheckoutAddressItem';

export default function CheckoutAddressList({address}) {
  const {selectedAddress, setSelectedAddress} = useAddress();

  const handleSelect = (address) => {
    setSelectedAddress(address);
  };

  return (
    <div className="flex flex-col gap-5">
      {address.map((el) => (
        <CheckoutAddressItem
          key={el.id}
          addressItem={el}
          isSelected={el.id === selectedAddress.id}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}
