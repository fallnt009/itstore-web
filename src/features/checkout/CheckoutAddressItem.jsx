export default function CheckoutAddressItem({addressItem}) {
  const {
    streetNumber,
    unitNumber,
    addressLine1,
    addressLine2,
    city,
    country,
    region,
    postalCode,
  } = addressItem;
  return (
    <div className="container ">
      <div className=" grid border-2">
        <div className="flex gap-3 ">
          <div>{unitNumber}</div>
          <div>{streetNumber}</div>
          <div> {addressLine1}</div>
          <div> {addressLine2}</div>
        </div>
        <div className="flex gap-2">
          <div>{city}</div>
          <div>{country}</div>
          <div>{region}</div>
          <div>{postalCode}</div>
        </div>
      </div>
    </div>
  );
}
