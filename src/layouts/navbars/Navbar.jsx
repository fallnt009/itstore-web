import {useState} from 'react';
import NavbarItem from './NavbarItem';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setIndex] = useState(null);

  return (
    <>
      <div>
        <NavbarItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIndex={setIndex}
          currentIndex={currentIndex}
        />
      </div>
    </>
  );
}
