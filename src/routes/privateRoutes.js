import {Navigate} from 'react-router-dom';

import ProfilePage from '../pages/ProfilePage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

//Checkout
import CheckoutDetails from '../features/checkout/CheckoutDetails';
import CheckoutServices from '../features/checkout/CheckoutServices';
import CheckoutPayment from '../features/checkout/CheckoutPayment';

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
    ],
  },

  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
