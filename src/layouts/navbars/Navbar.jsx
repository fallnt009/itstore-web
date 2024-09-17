import {useState} from 'react';

// import NavbarItem from './NavbarItem';
import NavbarSelectContainer from './select/NavbarSelectContainer';
import NavBarMenu from './items/NavBarMenu';
import NavbarPromotion from './select/NavbarPromotion';
import NavbarService from './select/NavbarService';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setIndex] = useState(null);

  const handleOpenSelectionBar = (index) => {
    //if index change need to setOpen true
    //if not change close
    if (index === currentIndex) {
      setIsOpen(false);
      setIndex(null);
    } else {
      setIsOpen(true);
      setIndex(index);
    }
  };
  const handleClose = () => {
    setIsOpen(false);
    setIndex(null);
  };

  return (
    <>
      <div>
        <NavBarMenu
          currentIndex={currentIndex}
          isOpen={isOpen}
          onOpen={handleOpenSelectionBar}
        />
        <NavbarSelectContainer onClose={handleClose} />
        <div className="relative overflow-hidden">
          <div
            className={`flex transition-transform duration-1000 ease-in-out ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
            style={{
              width: '100%',
            }}
          >
            {isOpen && currentIndex === 1 && <NavbarPromotion />}
            {isOpen && currentIndex === 2 && <NavbarService />}
          </div>
        </div>
      </div>
    </>
  );
}
