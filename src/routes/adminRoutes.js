import {Navigate} from 'react-router-dom';

import AdminPage from '../pages/AdminPage';
import PanelProductSpec from '../features/admin/product/create/main/PanelProductSpec';
import PanelProductContainer from '../features/admin/product/create/main/PanelProductContainer';
import PanelProductUpload from '../features/admin/product/create/main/PanelProductUpload';
import ProductManage from '../features/admin/main/ProductManage';

export const adminRoutes = [
  {
    path: 'dashboard',
    element: <AdminPage />,
  },
  {
    path: 'product/manage',
    element: <ProductManage />,
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
