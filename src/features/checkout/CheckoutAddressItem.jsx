export default function CheckoutAddressItem({
  addressItem,
  isSelected,
  onSelect,
}) {
  const {
    fullName,
    phoneNumber,
    addressLine1,
    addressLine2,
    postalCode,
    province,
  } = addressItem;

  const handleSelect = (e) => {
    e.preventDefault();
    onSelect(addressItem);
  };

  return (
    <div
      className={`container border-2 hover:border-cerulean-blue-800 cursor-pointer rounded-lg p-4 ${
        isSelected ? 'border-cerulean-blue-800' : ''
      }`}
      onClick={handleSelect}
    >
      <ul className="text-stone-600">
        <li>{fullName}</li>
        <ul className="py-2">
          <li>{addressLine1}</li>
          <li>{addressLine2}</li>
        </ul>
        <li>{postalCode}</li>
        <li>{province}</li>
        <li className="py-3">{phoneNumber}</li>
      </ul>
    </div>
  );
}
