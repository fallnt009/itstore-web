import {Outlet} from 'react-router-dom';

import Header from './headers/Header';
import Navbar from './navbars/Navbar';
import Sidebar from './navbars/Sidebar';
import Footer from './footers/Footer';

export default function MainLayout() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <div>
        <div>
          <Sidebar />
        </div>

        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
