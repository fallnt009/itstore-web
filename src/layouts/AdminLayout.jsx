import {Outlet} from 'react-router-dom';

import Header from './headers/Header';
import Navbar from './navbars/Navbar';
import PanelMenu from '../features/admin/panel/PanelMenu';

export default function AdminLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <PanelMenu />
      <div className="grid">
        <Outlet />
      </div>
    </div>
  );
}
