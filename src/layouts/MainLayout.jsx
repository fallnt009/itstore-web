import {Outlet} from 'react-router-dom';

import Header from './headers/Header';
import Navbar from './navbars/Navbar';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="min-vh-100">
        <Outlet />
      </div>
    </div>
  );
}
