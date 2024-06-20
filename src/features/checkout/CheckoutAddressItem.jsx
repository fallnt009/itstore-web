export default function CheckoutAddressItem({
  addressItem,
  selectedId,
  setSelectedId,
}) {
  const {
    id,
    fullName,
    phoneNumber,
    addressLine1,
    addressLine2,
    postalCode,
    province,
  } = addressItem;

  const handleSelect = (addrId) => {
    setSelectedId(addrId);
  };

  return (
    <div
      className={`container border-2 hover:border-cerulean-blue-800 cursor-pointer rounded-lg p-4 ${
        selectedId ? 'border-cerulean-blue-800' : ''
      }`}
      onClick={() => handleSelect(id)}
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
