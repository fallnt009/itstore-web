import {Navigate} from 'react-router-dom';

import AdminPage from '../pages/AdminPage';
import ManageProductPage from '../pages/ManageProductPage';

export const adminRoutes = [
  {
    path: 'dashboard',
    element: <AdminPage />,
  },
  {
    path: 'manage-product',
    element: <ManageProductPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
