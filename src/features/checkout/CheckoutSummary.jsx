import CheckoutProduct from './CheckoutProduct';

export default function CheckoutSummary({userCart}) {
  return (
    <div className="container">
      <div className="flex flex-col gap-5 mx-5 my-20">
        <div className="flex flex-col gap-1 py-4">
          <div className="flex  justify-between ">
            <h4 className="font-semibold"> Total Price</h4>
            <h4>2000 bath</h4>
          </div>
          <p>already included vat 7%</p>
        </div>
        <div className="flex flex-col gap-1 border-t-2  py-4">
          <h4 className="font-semibold">Delivery Information</h4>
          <div>helo</div>
        </div>
        <div className="flex flex-col gap-1 border-t-2  py-4">
          <h4 className="font-semibold">Delivery Method</h4>
          <p>delivery by mail</p>
          <p>time estimated 5-7 days</p>
        </div>
        <CheckoutProduct userCart={userCart} />
      </div>
    </div>
  );
}
