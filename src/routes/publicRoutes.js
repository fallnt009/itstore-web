import HomePage from '../pages/HomePage';
import CategoryPage from '../pages/CategoryPage';
import ProductPage from '../pages/ProductPage';
import OurWorkPage from '../pages/OurWorkPage';
import TrackingPage from '../pages/TrackingPage';
import ContactUsPage from '../pages/ContactUsPage';
import {Navigate} from 'react-router-dom';

export const publicRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/categories/:categoryName/:subCategoryName',
    element: <CategoryPage />,
  },
  {
    path: '/categories/:categoryName/:subCategoryName/:productName',
    element: <ProductPage />,
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
