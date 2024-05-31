export default function CartSummaryForm({cart}) {
  //Calculate total price and items
  const totalItemPrice = cart.reduce(
    (total, item) => total + parseFloat(item.Product.price) * item.qty,
    0
  );

  //define delivery and vat price
  const deliveryPrice = 90;
  const vatPercentage = 7;
  const vatPrice = (totalItemPrice + deliveryPrice) * (vatPercentage / 100);

  //Calculate total

  const realTotal = totalItemPrice + deliveryPrice + vatPrice;

  return (
    <div className="container">
      <div className=" flex flex-col mx-7">
        <div className="text-2xl font-bold">Cart Summary</div>
        {/* Show product and price */}
        <div className=" text-stone-700 text-md mt-5 ">
          <div className="flex justify-between">
            <div>Products({cart.length})</div>
            {/* price total */}
            <div>{totalItemPrice.toFixed(2)}THB</div>
          </div>
          <div className="flex justify-between">
            <div>Delivery price</div>
            <div>{deliveryPrice}THB</div>
          </div>
          <div className="flex justify-between">
            <div>Vat {vatPercentage}%</div>
            <div>{vatPrice.toFixed(2)}THB</div>
          </div>
        </div>
        <div className="flex justify-between border-t-2 border-black mt-5 pt-5 text-2xl font-semibold items-baseline">
          <div>Total</div>
          <div className="flex gap-1 items-baseline">
            <div className="text-3xl">{realTotal.toFixed(2)}</div>
            <div className=" flex text-sm items-end">THB</div>
          </div>
        </div>
        <div className="text-stone-700 text-sm mt-5 ">
          By clicking "check out" to proceed your order
        </div>
        <button className="flex justify-center font-bold text-sm bg-cerulean-blue-800 px-6 py-5 rounded-full text-white mt-5">
          <div className="text-lg">Go to Checkout</div>
        </button>
      </div>
    </div>
  );
}
