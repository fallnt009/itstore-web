import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {CHECKOUT_PAYMENT} from '../../config/routing';

import useCheckout from '../../hooks/useCheckout';

import ActiveButton from '../../components/ActiveButton';

import CheckoutServiceItem from './CheckoutServiceItem';

export default function CheckoutServices() {
  const [select, setSelect] = useState(false);

  const {checkout, service, selectService, selectedService, updateService} =
    useCheckout();

  //if checkout already have serviceId
  //already selected service until change
  //fetch every time that refresh
  useEffect(() => {
    if (checkout.serviceId) {
      const matchData = service.find((el) => el.id === checkout.serviceId);
      selectService(matchData);
      setSelect(true);
    }
  }, [checkout.serviceId]);

  //handleOnclick click = update
  const handleOnClickService = async () => {
    const data = {serviceId: selectedService.id};
    try {
      await updateService(checkout.id, data);
    } catch (err) {
      console.log('error updating');
    }
  };

  return (
    <div className="container grid ">
      <div className="mx-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-3xl">
            How would you like to receive your order?
          </h1>
          <p>Parcel Service info</p>
        </div>
        <div>
          {service.map((item) => (
            <CheckoutServiceItem
              checkout={checkout}
              select={select}
              setSelect={setSelect}
              selectService={selectService}
              item={item}
              key={item.id}
            />
          ))}

          <div className=" border-t-2 mt-9 font-semibold ">
            <div className="flex flex-col justify-center gap-3 mt-5">
              <ActiveButton
                to={CHECKOUT_PAYMENT}
                select={select}
                activeTitle="Proceed to payment"
                inActiveTitle="Proceed to payment"
                onClick={handleOnClickService}
              />

              <Link
                to={'/checkout/details'}
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
