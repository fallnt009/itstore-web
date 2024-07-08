import {Link, useNavigate} from 'react-router-dom';
import {MdHistory, MdLogout, MdAdminPanelSettings} from 'react-icons/md';

import {EMPLOYEE} from '../../config/constants';
import {ORDER_HISTORY} from '../../config/routing';

export default function DropdownMenuButton({authenUser, logout}) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(ORDER_HISTORY);
    navigate(0);
  };
  return (
    <>
      {/* ORDER HISTORY */}
      <button
        className="flex  gap-2 p-2 rounded-md hover:bg-cerulean-blue-100  items-center w-full"
        onClick={handleOnClick}
      >
        <i className="rounded-full bg-cerulean-blue-800 text-white p-2">
          <MdHistory />
        </i>
        <p className="text-sm font-regular">Order History</p>
      </button>
      {authenUser.roles === EMPLOYEE ? (
        <Link to="/admin-panel" className="w-full">
          <button className="flex  gap-2 p-2 rounded-md hover:bg-cerulean-blue-100  items-center w-full">
            <i className="rounded-full bg-cerulean-blue-800 text-white p-2">
              <MdAdminPanelSettings />
            </i>
            <p className="text-sm font-regular">Admin Panel</p>
          </button>
        </Link>
      ) : (
        ''
      )}
      {/* LOGOUT */}
      <button
        className="flex  gap-2 p-2 rounded-md hover:bg-cerulean-blue-100  items-center w-full"
        onClick={logout}
      >
        <i className="rounded-full bg-cerulean-blue-800 text-white p-2">
          <MdLogout />
        </i>
        <p className="text-sm font-regular">Log Out</p>
      </button>
    </>
  );
}
