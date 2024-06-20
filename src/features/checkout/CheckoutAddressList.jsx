import CheckoutAddressItem from './CheckoutAddressItem';

export default function CheckoutAddressList({
  address,
  selectedId,
  setSelectedId,
}) {
  return (
    <div className="flex flex-col gap-5">
      {address.map((el) => (
        <CheckoutAddressItem
          key={el.id}
          addressItem={el}
          selectedId={el.id === selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
}
