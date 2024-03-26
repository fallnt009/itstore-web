import {MdShoppingCart} from 'react-icons/md';

export default function Header() {
  return (
    <div className="bg-white">
      <div className="flex mx-10 my-10 items-center">
        {/* Logo */}
        <div className="flex-2 font-mono font-extrabold text-5xl">ITStores</div>
        {/* Search Bar */}
        <div className="flex-1 mx-10">
          <div className=" p-3 rounded-full bg-neutral-400">Search Bar</div>
        </div>
        {/* Cart */}
        <div className="flex-2 mx-4">
          <MdShoppingCart size={35} />
        </div>
        {/* Avatar */}
        <div className="flex-2 mx-4 rounded-full bg-neutral-400 w-12 h-12"></div>
      </div>
    </div>
  );
}
