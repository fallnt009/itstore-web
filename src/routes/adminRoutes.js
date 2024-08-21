import {Navigate} from 'react-router-dom';

import AdminPage from '../pages/AdminPage';
import PanelProductSpec from '../features/admin/product/create/main/PanelProductSpec';

import PanelProductUpload from '../features/admin/product/create/main/PanelProductUpload';
import ProductManage from '../features/admin/main/ProductManage';
import ManageEdit from '../features/admin/product/manage/ManageEdit';
import ManageCreate from '../features/admin/product/manage/ManageCreate';
import ManagePreview from '../features/admin/product/manage/ManagePreview';

export const adminRoutes = [
  {
    path: 'dashboard',
    element: <AdminPage />,
  },
  {
    path: 'product',
    element: <ProductManage />,
  },
  {
    path: 'prodspec',
    element: <PanelProductSpec />,
  },
  {
    path: 'product/create',
    element: <ManageCreate />,
  },
  {
    path: 'product/edit/:id',
    element: <ManageEdit />,
  },
  {
    path: 'product/preview/:id',
    element: <ManagePreview />,
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
