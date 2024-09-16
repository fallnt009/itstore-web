import {useState} from 'react';

// import NavbarItem from './NavbarItem';
import NavbarSelectContainer from './select/NavbarSelectContainer';
import NavBarMenu from './items/NavBarMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setIndex] = useState(null);

  const handleOpenSelectionBar = (index) => {
    setIndex(index);
    setIsOpen((prev) => !prev);
  };
  const handleClose = () => {
    setIndex(null);
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <NavBarMenu
          currentIndex={currentIndex}
          onOpen={handleOpenSelectionBar}
        />
        <div className="relative overflow-hidden">
          <div
            className={`flex transition-transform duration-1000 ease-in-out ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            } ${!isOpen ? '-translate-y-full' : 'translate-y-0'}`}
            style={{
              width: '100%',
            }}
          >
            {isOpen && currentIndex === 0 && (
              <NavbarSelectContainer onClose={handleClose} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
