import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import HomePage from '../pages/HomePage';

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
