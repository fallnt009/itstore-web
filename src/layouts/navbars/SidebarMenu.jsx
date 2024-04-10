import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

import SidebarDropdown from './SidebarDropdown';

import Category from '../../data/productCategory.json';

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState({});
  const location = useLocation();

  const toggleOpen = (categoryId) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [categoryId]: !prevState[categoryId] || false,
    }));
  };
  return (
    <div>
      {Category.map((el) => (
        <div key={el.id}>
          <Link to={el.pathname}>
            <button
              className={`bg-white p-3 pl-8 w-full  cursor-pointer text-start ${
                location.pathname === el.pathname
                  ? 'bg-cerulean-blue-100'
                  : 'hover:bg-cerulean-blue-100'
              }`}
              onClick={() => toggleOpen(el.id)}
            >
              {el.title}
            </button>
          </Link>
          {isOpen[el.id] &&
            (el.subCategory ? (
              <div className="p-3 pl-12 text-lg">
                <SidebarDropdown subCategory={el.subCategory} />
              </div>
            ) : (
              ''
            ))}
        </div>
      ))}
    </div>
  );
}
