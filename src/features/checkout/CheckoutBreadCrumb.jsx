import {MdSubject, MdOutlineLocalShipping, MdPayment} from 'react-icons/md';

import CBreadCrumbItem from './CBreadCrumbItem';

export default function CheckoutBreadCrumb() {
  return (
    <div>
      <ul className="flex gap-10">
        <CBreadCrumbItem
          icon={<MdSubject size={25} />}
          title="Your Details"
          targetPath="/checkout/details"
        />
        <CBreadCrumbItem
          icon={<MdOutlineLocalShipping size={25} />}
          title="Services"
          targetPath="/checkout/services"
        />
        <CBreadCrumbItem
          icon={<MdPayment size={25} />}
          title="Payment"
          targetPath="/checkout/payment"
        />
      </ul>
    </div>
  );
}
