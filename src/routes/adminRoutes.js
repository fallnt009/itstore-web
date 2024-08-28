import {Navigate} from 'react-router-dom';

import AdminPage from '../pages/AdminPage';

import PanelProductUpload from '../features/admin/product/create/main/PanelProductUpload';
import ProductManage from '../features/admin/main/ProductManage';
import ProductSpecManage from '../features/admin/main/ProductSpecManage';
import ManageEdit from '../features/admin/product/manage/ManageEdit';
import ManageCreate from '../features/admin/product/manage/ManageCreate';
import ManagePreview from '../features/admin/product/manage/ManagePreview';

import SpecCreate from '../features/admin/product/manage/spec/create/SpecCreate';
import SpecEdit from '../features/admin/product/manage/spec/edit/SpecEdit';

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
    path: 'productspec',
    element: <ProductSpecManage />,
  },
  {
    path: 'productspec/create',
    element: <SpecCreate />,
  },
  {
    path: 'productspec/edit/:id',
    element: <SpecEdit />,
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
