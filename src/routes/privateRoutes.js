import {Navigate} from 'react-router-dom';

import ProfilePage from '../pages/ProfilePage';
import CheckoutPage from '../pages/CheckoutPage';
import OrderPage from '../pages/OrderPage';
import CartPage from '../pages/CartPage';

//Checkout
import CheckoutDetails from '../features/checkout/CheckoutDetails';
import CheckoutServices from '../features/checkout/CheckoutServices';
import CheckoutPayment from '../features/checkout/CheckoutPayment';
import OrderDetails from '../features/order/OrderDetails';
import OrderHistory from '../features/order/OrderHistory';
import CheckoutSuccess from '../features/checkout/CheckoutSuccess';

import PaymentTransfer from '../features/payment/PaymentTransfer';
import PaymentProof from '../features/payment/PaymentProof';

//redirect

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
    path: '/status',
    children: [
      {
        path: 'ordersuccess',
        element: <CheckoutSuccess />,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
