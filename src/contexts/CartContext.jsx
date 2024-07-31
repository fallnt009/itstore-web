import {createContext, useState, useCallback} from 'react';
import {toast} from 'react-toastify';

import * as CartApi from '../apis/cart-api';
import useLoading from '../hooks/useLoading';

const CartContext = createContext();

export default function CartContextProvider({children}) {
  const [userCart, setUserCart] = useState([]);
  //authen ?

  //loading
  const {startLoading, stopLoading} = useLoading();

  //fetch user cart
  const fetchMyCart = useCallback(async () => {
    try {
      const res = await CartApi.getMyCart();
      const cartItems = res.data.result[0].CartItems;
      setUserCart(cartItems);
    } catch (err) {
      console.log('Error fetching', err);
    }
  }, []);

  //update qty CartItem
  const changeQtyCartItem = async (itemId, newQty) => {
    startLoading();
    try {
      await CartApi.updateCartItem(itemId, newQty);
      setUserCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId ? {...item, qty: newQty} : item
        )
      );
    } catch (err) {
      console.log('Error updating cart quantity', err);
      toast.error('Something went wrong');
    } finally {
      stopLoading();
    }
  };
  //delete CartItem
  const removeCartItem = async (itemId) => {
    startLoading();
    try {
      await CartApi.deletecartItem(itemId);
      setUserCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
      toast.success('Remove Success');
    } catch (err) {
      console.log('Error removing cart ', err);
      toast.error('Something went wrong');
    } finally {
      stopLoading();
    }
  };

  //Add Cart
  const addCartItem = async (valueId) => {
    try {
      //check userCart index that reach limit
      if (userCart.length >= 10) {
        toast.error('Cart can add only 10 items per order');
        return;
      }
      //find index of item in cart

      const index = userCart.findIndex((item) => item.productId === valueId);
      //if item is already  in cart update qty
      if (index !== -1) {
        const updatedCart = [...userCart];
        updatedCart[index].qty++;
        setUserCart(updatedCart);
        await CartApi.updateCartItem(
          updatedCart[index].id,
          updatedCart[index].qty
        );
      } else {
        //   //if the item is not in cart add it
        const res = await CartApi.addCartItem(valueId, 1);
        setUserCart([...userCart, res.data.result.CartItems[0]]);
      }
      toast.success('Add to Cart Success');
    } catch (err) {
      console.log('error adding item', err);
      toast.error('Something went wrong');
    }
  };

  return (
    <CartContext.Provider
      value={{
        userCart,
        fetchMyCart,
        changeQtyCartItem,
        removeCartItem,
        addCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export {CartContext};
