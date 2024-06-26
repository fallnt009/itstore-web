import {Outlet} from 'react-router-dom';

export default function OrderContainer() {
  return (
    <div className="container">
      <div className="my-10 p-16">
        <Outlet />
      </div>
    </div>
  );
}
