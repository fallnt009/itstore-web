import {useContext} from 'react';
import {CheckoutContext} from '../contexts/CheckoutContext';

export default function useCheckout() {
  return useContext(CheckoutContext);
}
