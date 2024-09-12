import NavbarDropdown from './NavbarDropdown';

export default function NavbarSelection({index, isOpen, setIsOpen}) {
  return (
    <div className="border">
      <NavbarDropdown index={index} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
