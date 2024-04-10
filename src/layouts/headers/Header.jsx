import {MdShoppingCart} from 'react-icons/md';
import Brand from './Brand';
import Dropdown from './Dropdown';

export default function Header() {
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
        <div className="flex-2 mx-4">
          <MdShoppingCart size={35} />
        </div>
        {/* Avatar */}
        <div className="flex-2 mx-4  ">
          <Dropdown />
        </div>
      </div>
    </div>
  );
}
