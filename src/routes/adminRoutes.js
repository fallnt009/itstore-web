import {Navigate} from 'react-router-dom';

import AdminPage from '../pages/AdminPage';
import ManageProductPage from '../pages/ManageProductPage';
import PanelProductSpec from '../features/admin/PanelProductSpec';
import PanelProductMain from '../features/admin/PanelProductMain';

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
    element: <PanelProductMain />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
