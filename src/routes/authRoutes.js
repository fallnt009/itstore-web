import {Navigate} from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

import RedirectIfAuthen from '../features/auth/RedirectIfAuthen';

export const authRoutes = [
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
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
