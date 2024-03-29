import {useState} from 'react';

import SidebarDropdown from './SidebarDropdown';

import Category from '../../data/productCategory.json';

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState({});

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
          <button
            className="bg-white p-3 pl-8 w-full hover:bg-cerulean-blue-100 cursor-pointer text-start"
            onClick={() => toggleOpen(el.id)}
          >
            {el.title}
          </button>
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
