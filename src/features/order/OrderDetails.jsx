import OrderDetailsProduct from './OrderDetailsProduct';

export default function OrderDetails() {
  return (
    <div className="container">
      <div className="grid mx-24 border-2  rounded-2xl p-6">
        <div className="flex flex-col gap-2 py-5">
          <h1 className="font-semibold text-3xl">ORDER NO: 1121312</h1>
          <div className="flex gap-1 ">
            <h4 className="font-semibold">Order Status:</h4>
            <p>PENDING</p>
          </div>
        </div>
        {/* FOR ORDER STATUS */}
        <div className="flex gap-5 border-b-2 py-2 pb-4">
          <div className="flex gap-1 ">
            <h4 className="font-semibold">Order date: </h4>
            <p>Feb 16,2022</p>
          </div>
          <div className="flex gap-1 ">
            <h4 className="font-semibold">Estimated delivery:</h4>
            <p> Feb 18,2022</p>
          </div>
        </div>
        <div className="overflow-y-auto max-h-[75vh] ">
          <OrderDetailsProduct />
        </div>
        <div className="grid grid-cols-2 border-t-2 py-5">
          <div>
            <h4 className="font-semibold">Payment</h4>
            <div className="py-2">
              <p className="text-stone-500 text-sm">Payment method</p>
              <div className="py-2">
                <p>Bank Transfer</p>
              </div>
            </div>
            <div className="py-2">
              <p className="text-stone-500 text-sm">Payment status</p>
              <div className="py-2">
                <p>PENDING</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Delivery</h4>
            <div className="py-2">
              <p className="text-stone-500 text-sm">Address</p>
              <div className="py-2">
                <p>847 Jewess Bridge Apt.45</p>
                <p>London,UK</p>
                <p>474-769-3919</p>
              </div>
            </div>
            <div className="py-2">
              <p className="text-stone-500 text-sm">Delivery method</p>
              <div className="py-2">
                <p>Standard Delivery(3-5 days)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 border-t-2 py-5">
          <div>
            {' '}
            <h4 className="font-semibold">Delivery Info</h4>
            <div className="py-2">
              <p className="text-stone-500 text-sm">Parcel Service</p>
              <div className="py-2">
                <p>Kerry</p>
              </div>
            </div>
            <div className="py-2">
              <p className="text-stone-500 text-sm">Tracking Number</p>
              <div className="py-2">
                <p>N1231354SDAS</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Order Summary</h4>
            <div className="flex flex-col gap-2 py-2 ">
              <div className="flex justify-between gap-2 text-lg text-stone-700">
                <h4>Sub Total</h4>
                <p className="">9,999 THB</p>
              </div>
              <div className="flex justify-between gap-2 text-sm text-stone-500">
                <h4>Delivery</h4>
                <p className="">0 THB</p>
              </div>
              <div className="flex justify-between gap-2 text-sm text-stone-500">
                <h4>Tax</h4>
                <p className="">450 THB</p>
              </div>
              <div className="flex justify-between gap-2 text-lg border-t-2 py-3 text-stone-700">
                <h4>Total</h4>
                <p className="font-semibold">10,000 THB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
