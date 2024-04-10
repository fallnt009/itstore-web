import {Outlet} from 'react-router-dom';

import Header from './headers/Header';
import Navbar from './navbars/Navbar';

export default function AuthLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex">
        <div className="h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
