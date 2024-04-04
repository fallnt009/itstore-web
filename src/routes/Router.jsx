import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CategoryPage from '../pages/CategoryPage';
import OurWorkPage from '../pages/OurWorkPage';
import TrackingPage from '../pages/TrackingPage';
import ContactUsPage from '../pages/ContactUsPage';

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/categories/:categoryName/:subCategoryName',
          element: <CategoryPage />,
        },
        {
          path: '/product',
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
