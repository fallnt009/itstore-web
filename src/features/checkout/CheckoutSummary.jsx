import {VAT_PERCENTAGE} from '../../config/store';

import CheckoutProduct from './CheckoutProduct';
import CAddressBox from './CAddressBox';
import CheckoutSummaryService from './CheckoutSummaryService';
import CSummaryAmount from './CSummaryAmount';

import useCheckout from '../../hooks/useCheckout';
import {useEffect} from 'react';

export default function CheckoutSummary({defaultAddress, userCart}) {
  const {checkout, getTotalAmount, amount} = useCheckout();
  const {Service} = checkout;

  const serviceFee = Service?.price;

  //Calculate total price and items
  const itemsPrice = userCart.reduce(
    (total, item) => total + parseFloat(item.Product.price) * item.qty,
    0
  );
  //Define delivery and vat price
  const vatAmount = Number(itemsPrice) * (VAT_PERCENTAGE / 100);
  //Calculate total
  const totalPrice =
    Number(itemsPrice) + Number(serviceFee) + Number(vatAmount);

  //send totalamount to the state
  useEffect(() => {
    getTotalAmount(totalPrice, itemsPrice);
  }, [totalPrice, itemsPrice]);

  console.log(amount);

  return (
    <div className="container">
      <div className="flex flex-col gap-5 mx-5 ">
        <div className="flex flex-col gap-2 py-4">
          <CSummaryAmount
            totalPrice={totalPrice}
            vatAmount={vatAmount}
            itemsPrice={itemsPrice}
            serviceFee={serviceFee}
          />
        </div>
        <div className="flex flex-col gap-1 border-t-2  py-4">
          <h4 className="font-semibold">Delivery Information</h4>
          <div>
            <CAddressBox defaultAddress={defaultAddress} />
          </div>
        </div>
        <div className="flex flex-col gap-1 border-t-2  py-4">
          <h4 className="font-semibold">Delivery Method</h4>
          <div>
            <CheckoutSummaryService checkoutService={Service} />
          </div>
        </div>
        <CheckoutProduct userCart={userCart} />
      </div>
    </div>
  );
}
