import {Outlet} from 'react-router-dom';

import Header from './headers/Header';
// import Navbar from './navbars/Navbar';
import Footer from './footers/Footer';

export default function AuthLayout() {
  return (
    <div className="container">
      <Header />
      {/* <Navbar /> */}
      <div className="mt-11">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
