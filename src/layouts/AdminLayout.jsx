import {Outlet} from 'react-router-dom';

import Header from './headers/Header';
import Navbar from './navbars/Navbar';
import PanelMenu from '../features/admin/PanelMenu';

export default function AdminLayout() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <div className="grid grid-cols-[1fr_4fr]">
        <PanelMenu />
        <Outlet />
      </div>
    </div>
  );
}
