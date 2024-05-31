import {useEffect, useState} from 'react';

import CartItem from './CartItem';
import CartSummaryForm from './CartSummaryForm';

import useLoading from '../../hooks/useLoading';
import * as CartApi from '../../apis/cart-api';

export default function CartContainer() {
  const [cart, setCart] = useState([]);

  const {startLoading, stopLoading} = useLoading();

  //   FETCH CART
  useEffect(() => {
    const fetchCart = async () => {
      startLoading();
      try {
        const res = await CartApi.getMyCart();
        setCart(res.data.result[0].CartItems);
      } catch (err) {
        console.log('Error fetching', err);
      } finally {
        stopLoading();
      }
    };
    fetchCart();
  }, []);
  //handle Quantity Change
  const handleQuantityChange = async (itemId, newQty) => {
    startLoading();

    try {
      await CartApi.updateCartItem(itemId, newQty);
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId ? {...item, qty: newQty} : item
        )
      );
    } catch (err) {
      console.log('Error updating cart quantity', err);
    } finally {
      stopLoading();
    }
  };

  const handleRemoveChange = async (itemId) => {
    startLoading();
    try {
      await CartApi.deletecartItem(itemId);
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    } catch (err) {
      console.log('Error removing cart ', err);
    } finally {
      stopLoading();
    }
  };

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
            {cart.length > 1 ? (
              <p className="mx-5 p-2 text-stone-500">
                {cart.length} items in total
              </p>
            ) : (
              <p className="mx-5 p-2 text-stone-500">
                {cart.length} item in total
              </p>
            )}
            <div className="overflow-y-auto max-h-[75vh]">
              {cart.map((el) => (
                <CartItem
                  key={el.id}
                  item={el}
                  onQuantityChange={handleQuantityChange}
                  onDelete={handleRemoveChange}
                />
              ))}
            </div>
          </div>

          {/* proceed to check out */}
          <div>
            <CartSummaryForm cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
}
