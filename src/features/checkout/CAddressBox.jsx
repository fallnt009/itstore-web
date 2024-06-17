export default function CAddressBox({selectedAddress}) {
  if (!selectedAddress) {
    return <div className="text-stone-600">Please select your address </div>;
  }
  const {
    fullName,
    phoneNumber,
    addressLine1,
    addressLine2,
    postalCode,
    province,
  } = selectedAddress;
  return (
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
  );
}
