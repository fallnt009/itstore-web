import {Link} from 'react-router-dom';

export default function SidebarDropdownItem({children, to}) {
  return (
    <Link to={to}>
      <div className="w-full p-2 hover:bg-cerulean-blue-100 ">
        <span></span>
        <button>{children}</button>
      </div>
    </Link>
  );
}
