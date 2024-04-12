import {Outlet} from 'react-router-dom';

import Header from './headers/Header';
import Navbar from './navbars/Navbar';
import Sidebar from './navbars/Sidebar';
import Footer from './footers/Footer';

export default function MainLayout() {
  return (
    <div className="">
      <Header />
      <Navbar />
      <div className="flex">
        <div className="basis-1/6">
          <Sidebar />
        </div>
        <div className="basis-5/6 ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
