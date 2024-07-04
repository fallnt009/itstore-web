import {Navigate} from 'react-router-dom';

import ProfilePage from '../pages/ProfilePage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

//Checkout
import CheckoutDetails from '../features/checkout/CheckoutDetails';
import CheckoutServices from '../features/checkout/CheckoutServices';
import CheckoutPayment from '../features/checkout/CheckoutPayment';
import OrderPage from '../pages/OrderPage';
import OrderDetails from '../features/order/OrderDetails';
import PaymentTransfer from '../features/payment/PaymentTransfer';
import PaymentProof from '../features/payment/PaymentProof';
import OrderHistory from '../features/order/OrderHistory';

export const privateRoute = [
  {
    path: '/profile/:userId',
    element: <ProfilePage />,
  },
  {
    path: '/yourcart',
    element: <CartPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
    children: [
      {
        path: 'details',
        element: <CheckoutDetails />,
      },
      {
        path: 'services',
        element: <CheckoutServices />,
      },
      {
        path: 'payment',
        element: <CheckoutPayment />,
      },
      {
        path: 'transferpay',
        element: <PaymentTransfer />,
      },
    ],
  },
  {
    path: '/order',
    element: <OrderPage />,
    children: [
      {
        path: 'details/:orderNumber',
        element: <OrderDetails />,
      },
      {
        path: 'proof',
        element: <PaymentProof />,
      },
      {
        path: 'history',
        element: <OrderHistory />,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
