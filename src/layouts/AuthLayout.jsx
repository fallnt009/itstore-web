import {Outlet} from 'react-router-dom';

import Header from './headers/Header';
import Navbar from './navbars/Navbar';
import Footer from './footers/Footer';

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
      <Footer />
    </div>
  );
}
