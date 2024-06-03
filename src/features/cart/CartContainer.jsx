import CartItem from './CartItem';
import CartSummaryForm from './CartSummaryForm';

import useCart from '../../hooks/useCart';

export default function CartContainer() {
  const {userCart, changeQtyCartItem, removeCartItem} = useCart();

  return (
    <div className="container">
      <div className=" mx-10 mt-10">
        {/* title */}
        <div className="flex justify-start flex-col gap-2 p-2  mx-5 ">
          <div className="text-5xl text-cerulean-blue-800 font-bold ">
            Your Cart
          </div>
        </div>

        {/* Cart Items */}
        <div className="grid grid-cols-[3fr_2fr] mt-2">
          {/* ITEM LENGTH */}
          <div className="p-2  ">
            {/* need to fix cart items total */}
            {userCart.length > 1 ? (
              <p className="mx-5 p-2 text-stone-500">
                {userCart.length} items in total
              </p>
            ) : (
              <p className="mx-5 p-2 text-stone-500">
                {userCart.length} item in total
              </p>
            )}
            <div className="overflow-y-auto max-h-[75vh]">
              {userCart.map((el) => (
                <CartItem
                  key={el.id}
                  item={el}
                  onQuantityChange={changeQtyCartItem}
                  onDelete={removeCartItem}
                />
              ))}
            </div>
          </div>

          {/* proceed to check out */}
          <div>
            <CartSummaryForm cart={userCart} />
          </div>
        </div>
      </div>
    </div>
  );
}
