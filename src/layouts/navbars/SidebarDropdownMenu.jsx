import {useLocation} from 'react-router-dom';

import SidebarDropdownItem from './SidebarDropdownItem';

export default function SidebarDropdownMenu({subCategory}) {
  const location = useLocation();
  return (
    <div className="flex flex-col  gap-1  ">
      {subCategory.map((el) => (
        <SidebarDropdownItem
          key={el.id}
          to={el.pathname}
          active={location.pathname === el.pathname}
        >
          {el.title}
        </SidebarDropdownItem>
      ))}
    </div>
  );
}
