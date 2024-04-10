import {useState, useEffect, useRef} from 'react';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownEl = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownEl.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex justify-end ">
      <div className="relative z-50" ref={dropdownEl}>
        <DropdownToggle onClick={() => setOpen(!open)} />
        <DropdownMenu open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
