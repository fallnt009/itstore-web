import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

export default function SidebarDropdownItem({children, active, to}) {
  return (
    <Link to={to}>
      <div
        className={`flex items-center p-2  ${
          active ? 'bg-cerulean-blue-100' : 'hover:bg-cerulean-blue-100'
        }  `}
      >
        <span>
          <MdKeyboardArrowRight />
        </span>
        <span>{children}</span>
      </div>
    </Link>
  );
}
