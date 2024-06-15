import {Link} from 'react-router-dom';
import {MdShoppingCart} from 'react-icons/md';
import Brand from './Brand';
import Dropdown from './Dropdown';

import useAuth from '../../hooks/useAuth';

export default function Header() {
  const {authenUser} = useAuth();
  return (
    <div className="bg-white">
      <div className="flex mx-10 my-10 items-center">
        {/* Logo */}
        <Brand />
        {/* Search Bar */}
        <div className="flex-1 mx-10">
          <div className=" p-3 rounded-full bg-neutral-400">Search Bar</div>
        </div>
        {/* Cart */}
        {authenUser ? (
          <Link to={'/yourcart'}>
            <div className="flex-2 mx-4 hover:bg-cerulean-blue-800 hover:text-white rounded-full p-2">
              <div className="flex">
                <MdShoppingCart size={35} />
              </div>
            </div>
          </Link>
        ) : (
          <Link to={'/login'}>
            <div className="flex-2 mx-4 hover:bg-cerulean-blue-800 hover:text-white rounded-full p-2">
              <MdShoppingCart size={35} />
            </div>
          </Link>
        )}
        {/* Avatar */}
        <div className="flex-2 mx-4  ">
          <Dropdown />
        </div>
      </div>
    </div>
  );
}
