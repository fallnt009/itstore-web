export default function OrderDelivery({OrderDetail}) {
  //address
  const addressLine1 = OrderDetail?.UserAddress?.Address?.addressLine1;
  const addressLine2 = OrderDetail?.UserAddress?.Address?.addressLine2;
  const province = OrderDetail?.UserAddress?.Address?.province;
  const postalCode = OrderDetail?.UserAddress?.Address?.postalCode;
  const phoneNumber = OrderDetail?.UserAddress?.Address?.phoneNumber;

  //service
  const serviceName = OrderDetail?.Service?.name;
  const serviceDesc = OrderDetail?.Service?.description;

  return (
    <div>
      <h4 className="font-semibold">Delivery</h4>
      <div className="py-2">
        <p className="text-stone-500 text-sm">Address</p>
        <div className="flex flex-col py-2">
          <p>{addressLine1}</p>
          <p>{addressLine2}</p>
          <div className="flex gap-1">
            <p>{province}</p>
            <p>{postalCode}</p>
          </div>
          <p>{phoneNumber}</p>
        </div>
      </div>
      <div className="py-2">
        <p className="text-stone-500 text-sm">Delivery method</p>
        <div className="py-2">
          <p>{serviceName}</p>
          <p>{serviceDesc}</p>
        </div>
      </div>
    </div>
  );
}
