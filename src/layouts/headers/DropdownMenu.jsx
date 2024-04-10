import {Link} from 'react-router-dom';
import {MdLogout} from 'react-icons/md';

import Avatar from '../../components/Avatar';

export default function DropdownMenu({open, onClose}) {
  return (
    <div
      className={`absolute z-100 right-0 bg-white py-3 px-2 border rounded-md shadow-sm w-96 text-cerulean-blue-800 ${
        open ? 'block' : 'hidden'
      }`}
    >
      <Link
        to={`/profile/1`}
        className="flex p-2 px-2 gap-3 items-center rounded-md hover:bg-cerulean-blue-100"
        onClick={onClose}
      >
        <Avatar size={60} />
        <div className="flex flex-col items-start ">
          <span className="font-bold text-lg">Phruek Tony</span>
          <small>Manage Profile</small>
        </div>
      </Link>
      <hr className="mx-2 my-2"></hr>
      <div className="flex flex-col items-start gap-3 ">
        <button className="flex  gap-2 p-2 rounded-md hover:bg-cerulean-blue-100  items-center w-full">
          <i className="rounded-full bg-cerulean-blue-800 text-white p-2">
            <MdLogout />
          </i>
          <p className="font-bold">Log Out</p>
        </button>
      </div>
    </div>
  );
}
