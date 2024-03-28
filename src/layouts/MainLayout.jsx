import {Outlet} from 'react-router-dom';

import Header from './headers/Header';
import Navbar from './navbars/Navbar';
import Sidebar from './navbars/Sidebar';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex">
        <div className="basis-1/6">
          <Sidebar />
        </div>
        <div className="basis-5/6  max-w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
