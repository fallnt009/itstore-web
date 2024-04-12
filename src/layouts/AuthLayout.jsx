import {Outlet} from 'react-router-dom';

import Header from './headers/Header';
import Navbar from './navbars/Navbar';

export default function AuthLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
