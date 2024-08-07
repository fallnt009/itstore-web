import {Navigate} from 'react-router-dom';

import AdminPage from '../pages/AdminPage';
import ManageProductPage from '../pages/ManageProductPage';
import PanelProductSpec from '../features/admin/panel/PanelProductSpec';
import PanelProductContainer from '../features/admin/panel/PanelProductContainer';
import PanelProductUpload from '../features/admin/panel/PanelProductUpload';

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
    path: 'product/create',
    element: <PanelProductContainer />,
  },
  {
    path: 'product/upload',
    element: <PanelProductUpload />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
