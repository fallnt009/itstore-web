import {Navigate} from 'react-router-dom';

import AdminPage from '../pages/AdminPage';
import ManageProductPage from '../pages/ManageProductPage';
import PanelProductSpec from '../features/admin/panel/PanelProductSpec';
import PanelProductContainer from '../features/admin/panel/PanelProductContainer';

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
    path: 'prodspec',
    element: <PanelProductSpec />,
  },
  {
    path: 'product',
    element: <PanelProductContainer />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
