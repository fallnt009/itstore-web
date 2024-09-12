import {useRef} from 'react';

import NavbarSelection from './NavbarSelection';

export default function NavbarItem({
  isOpen,
  setIsOpen,
  currentIndex,
  setIndex,
}) {
  const menuItems = [
    {id: 1, title: 'Explore Product'},
    {id: 2, title: 'Promotion'},
    {id: 3, title: ' Services'},
  ];

  const dropdownRef = useRef();

  const handleMouseEnter = (index) => {
    setIndex(index);
    setIsOpen(true);
  };

  const handleMouseLeave = (event) => {
    const dropdown = dropdownRef.current;
    const relatedTarget = event.relatedTarget;

    //Check if valid DOM Node
    if (!relatedTarget || !(relatedTarget instanceof Node)) {
      setIsOpen(false);
      setIndex(null);
      return;
    }

    //Check if relatedTarget not contained in dropdown
    if (dropdown && !dropdown.contains(relatedTarget)) {
      setIsOpen(false);
      setIndex(null);
    }
  };
  return (
    <div
      className="flex justify-start text-xl  text-cerulean-blue-800 gap-7 px-10 border-b-2"
      onMouseLeave={handleMouseLeave}
    >
      {menuItems.map((item, index) => (
        <div
          className={`h-10 cursor-pointer  pb-2 ${
            currentIndex === index
              ? 'border-b-4 font-semibold border-cerulean-blue-800'
              : 'hover:border-b-4 hover:font-semibold hover:border-cerulean-blue-800'
          }`}
          key={item.id}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          {item.title}
        </div>
      ))}
      {isOpen && (
        <div ref={dropdownRef}>
          <NavbarSelection
            index={currentIndex}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      )}
    </div>
  );
}
