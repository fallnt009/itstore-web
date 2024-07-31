import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {BANKTRANSFER} from '../../config/constants';
import {PAYMENT_TRANSFER} from '../../config/routing';

import useCheckout from '../../hooks/useCheckout';
import useLoading from '../../hooks/useLoading';

import ActiveButton from '../../components/ActiveButton';

import CheckoutPaymentItem from './CheckoutPaymentItem';

export default function CheckoutPayment() {
  const [select, setSelect] = useState(false);

  const navigate = useNavigate();

  const {checkout, payment, selectedPayment, selectPayment, updatePayment} =
    useCheckout();

  const {startLoading, stopLoading} = useLoading();

  //fetch payment everytime if checkout have payment id
  useEffect(() => {
    if (checkout.paymentId) {
      const matchData = payment.find((el) => el.id === checkout.paymentId);
      selectPayment(matchData);
      setSelect(true);
    }
  }, [checkout.paymentId]);

  //handle onClick update
  const handleOnClickPayment = async (e) => {
    e.preventDefault();
    startLoading();
    const data = {paymentId: selectedPayment.id};
    const paymentName = checkout.Payment?.name;

    try {
      //await update by using data
      await updatePayment(checkout.id, data);
      //redirect to page by choice
      if (paymentName.toUpperCase() === BANKTRANSFER) {
        navigate(PAYMENT_TRANSFER);
        navigate(0);
      }
    } catch (err) {
      console.log('error updating');
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="container grid ">
      <div className="mx-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-3xl">How would you like to pay?</h1>
        </div>
        <div>
          {payment.map((item) => (
            <CheckoutPaymentItem
              checkout={checkout}
              select={select}
              setSelect={setSelect}
              selectPayment={selectPayment}
              item={item}
              key={item.id}
            />
          ))}
          <div className="border-t-2 mt-9 font-semibold ">
            <div className="flex flex-col justify-center gap-3 mt-5">
              <ActiveButton
                select={select}
                to={''}
                activeTitle="Proceed to payment"
                inActiveTitle="Proceed to payment"
                onClick={handleOnClickPayment}
              />

              <Link
                to={'/checkout/services'}
                className="flex justify-center py-4 px-5 border-black "
              >
                Back to Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
