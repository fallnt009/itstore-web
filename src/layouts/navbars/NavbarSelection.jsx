import NavbarDropdown from './NavbarDropdown';

export default function NavbarSelection({index, isOpen, setIsOpen}) {
  return (
    <div>
      <NavbarDropdown index={index} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
