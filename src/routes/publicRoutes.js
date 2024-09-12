import {Navigate} from 'react-router-dom';
import {
  HOME,
  PRODUCT,
  PRODUCT_CATEGORY,
  PRODUCT_DETAIL,
} from '../config/routing';

import HomePage from '../pages/HomePage';
import CategoryPage from '../pages/CategoryPage';
import ProductPage from '../pages/ProductPage';
import OurWorkPage from '../pages/OurWorkPage';
import TrackingPage from '../pages/TrackingPage';
import ContactUsPage from '../pages/ContactUsPage';

import CategoryNewProduct from '../features/category/promo/CategoryNewProduct';
import CategorySaleProduct from '../features/category/promo/CategorySaleProduct';

export const publicRoutes = [
  {
    path: HOME,
    element: <HomePage />,
  },
  {
    path: PRODUCT_CATEGORY,
    element: <CategoryPage />,
  },
  {
    path: PRODUCT_DETAIL,
    element: <ProductPage />,
  },
  {
    path: PRODUCT,
    children: [
      {
        path: 'new',
        element: <CategoryNewProduct />,
      },
      {
        path: 'flashsale',
        element: <CategorySaleProduct />,
      },
    ],
  },

  {
    path: '/ourwork',
    element: <OurWorkPage />,
  },
  {
    path: '/tracking',
    element: <TrackingPage />,
  },
  {
    path: '/contactus',
    element: <ContactUsPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
