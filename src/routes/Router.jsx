import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CategoryPage from '../pages/CategoryPage';
import OurWorkPage from '../pages/OurWorkPage';
import TrackingPage from '../pages/TrackingPage';
import ContactUsPage from '../pages/ContactUsPage';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CartPage from '../pages/CartPage';

import ProtectedRoute from '../features/auth/ProtectedRoute';
import RedirectIfAuthen from '../features/auth/RedirectIfAuthen';

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
          path: '/categories/product/:categoryName/:subCategoryName/:productName',
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
    {
      element: <AuthLayout />,
      children: [
        {
          path: '/login',
          element: (
            <RedirectIfAuthen>
              <LoginPage />
            </RedirectIfAuthen>
          ),
        },
        {
          path: '/register',
          element: <RegisterPage />,
        },
      ],
    },

    {
      element: (
        <ProtectedRoute>
          <AuthLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/profile/:userId',
          element: <ProfilePage />,
        },
        {
          path: '/yourcart',
          element: <CartPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
