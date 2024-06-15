import CheckoutAddressItem from './CheckoutAddressItem';

export default function CheckoutAddressList({address}) {
  return (
    <div>
      {address.map((el) => (
        <CheckoutAddressItem key={el.id} addressItem={el.Address} />
      ))}
    </div>
  );
}
