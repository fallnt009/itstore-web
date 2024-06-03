import {createContext, useState, useEffect} from 'react';
import {toast} from 'react-toastify';

import * as CartApi from '../apis/cart-api';
import useLoading from '../hooks/useLoading';
import useAuth from '../hooks/useAuth';

const CartContext = createContext();

export default function CartContextProvider({children}) {
  const [userCart, setUserCart] = useState([]);
  //authen ?
  const {authenUser} = useAuth();

  //loading
  const {startLoading, stopLoading} = useLoading();

  //fetch user cart
  useEffect(() => {
    const fetchCart = async () => {
      if (!authenUser) {
        return;
      }
      startLoading();
      try {
        const res = await CartApi.getMyCart();
        setUserCart(res.data.result[0].CartItems);
      } catch (err) {
        console.log('Error fetching', err);
      } finally {
        stopLoading();
      }
    };
    fetchCart();
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
      //Check product id if match in cart item Product Id
      const existItem = userCart.find((el) => el.productId === valueId);
      //if exist update quantity by increment
      if (existItem) {
        const updatedCart = userCart.map((item) =>
          item.productId === valueId ? {...item, qty: item.qty + 1} : item
        );
        setUserCart(updatedCart);
        //send API
        await CartApi.updateCartItem(existItem.id, existItem.qty + 1);
        toast.success('Add to Cart Success');
      } else {
        //if not create new one +1
        const res = await CartApi.addCartItem(valueId, 1);
        setUserCart([...userCart, res.data.result]);
        toast.success('Add to Cart Success');
      }
    } catch (err) {
      console.log('error adding item', err);
      toast.error('Something went wrong');
    }
  };

  return (
    <CartContext.Provider
      value={{userCart, changeQtyCartItem, removeCartItem, addCartItem}}
    >
      {children}
    </CartContext.Provider>
  );
}

export {CartContext};
