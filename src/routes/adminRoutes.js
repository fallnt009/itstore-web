import {Navigate} from 'react-router-dom';

import AdminPage from '../pages/AdminPage';

import ManageEdit from '../features/admin/product/manage/create/ManageEdit';
import ManageCreate from '../features/admin/product/manage/create/ManageCreate';
import ManagePreview from '../features/admin/product/manage/preview/ManagePreview';

import SpecCreate from '../features/admin/product/manage/spec/create/SpecCreate';
import SpecEdit from '../features/admin/product/manage/spec/edit/SpecEdit';
import SpecPreview from '../features/admin/product/manage/spec/preview/SpecPreview';
import ProductMain from '../features/admin/product/main/ProductMain';
import ProductSpecMain from '../features/admin/product/main/ProductSpecMain';

export const adminRoutes = [
  {
    path: 'dashboard',
    element: <AdminPage />,
  },
  {
    path: 'product',
    element: <ProductMain />,
  },
  {
    path: 'productspec',
    element: <ProductSpecMain />,
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
    path: 'productspec/preview/:id',
    element: <SpecPreview />,
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
    path: '*',
    element: <Navigate to="/" />,
  },
];
