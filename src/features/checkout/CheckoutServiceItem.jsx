export default function CheckoutServiceItem({select, setSelect}) {
  return (
    <div
      className={`flex flex-col gap-1 mt-5 border-2 p-3 py-4 rounded-lg hover:border-cerulean-blue-800 cursor-pointer ${
        select ? 'border-cerulean-blue-800' : ''
      }`}
      onClick={() => setSelect(true)}
      value="parcel"
    >
      <div className="flex justify-between">
        <h4 className="font-semibold ">Parcel Delivery</h4>
        <h4 className="font-semibold ">99 thb</h4>
      </div>
      <p className="text-sm text-stone-600">Delivered within 3-5 days</p>
    </div>
  );
}
