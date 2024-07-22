import {useEffect} from 'react';

import CartItem from './CartItem';
import CartSummaryForm from './CartSummaryForm';
import CartEmpty from './CartEmpty';

import useCart from '../../hooks/useCart';
import useLoading from '../../hooks/useLoading';

export default function CartContainer() {
  const {userCart, fetchMyCart, changeQtyCartItem, removeCartItem} = useCart();

  const {startLoading, stopLoading} = useLoading();

  useEffect(() => {
    const loadCart = async () => {
      startLoading();
      try {
        await fetchMyCart();
      } catch (err) {
        console.log(err);
      } finally {
        stopLoading();
      }
    };
    loadCart();
  }, [fetchMyCart]);

  //calculate total quantity
  const totalItem = userCart.reduce((total, item) => total + item.qty, 0);

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
        {userCart.length > 0 ? (
          <div className="grid grid-cols-[3fr_2fr] mt-2">
            {/* ITEM LENGTH */}
            <div className="p-2  ">
              {/* need to fix cart items total */}
              {totalItem > 1 ? (
                <p className="mx-5 p-2 text-stone-500">
                  {totalItem} items in total
                </p>
              ) : (
                <p className="mx-5 p-2 text-stone-500">
                  {totalItem} item in total
                </p>
              )}
              <div className="overflow-y-auto max-h-[75vh]">
                {userCart.map(
                  (el) =>
                    el?.id && (
                      <CartItem
                        key={el.id}
                        item={el}
                        onQuantityChange={changeQtyCartItem}
                        onDelete={removeCartItem}
                        limit={10}
                      />
                    )
                )}
              </div>
            </div>

            {/* proceed to check out */}
            <div>
              <CartSummaryForm cart={userCart} totalItem={totalItem} />
            </div>
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
}
