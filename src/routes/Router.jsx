import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import AdminLayout from '../layouts/AdminLayout';

import {publicRoutes} from './publicRoutes';
import {privateRoute} from './privateRoutes';
import {authRoutes} from './authRoutes';
import {adminRoutes} from './adminRoutes';

import ProtectedRoute from '../features/auth/ProtectedRoute';

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: publicRoutes,
    },
    {
      element: <AuthLayout />,
      children: authRoutes,
    },

    {
      element: (
        <ProtectedRoute>
          <AuthLayout />
        </ProtectedRoute>
      ),
      children: privateRoute,
    },
    {
      path: '/admin-panel',
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: adminRoutes,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
