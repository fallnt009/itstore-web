import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

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
          path: '/product',
          element: <ProductPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
