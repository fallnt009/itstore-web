import NavbarCategory from './NavbarCategory';
import NavbarPromotion from './NavbarPromotion';
import NavbarServices from './NavbarServices';

export default function NavbarDropdown({index, isOpen}) {
  return (
    <div className="flex justify-end">
      <div className="absolute left-0 top-[170px] z-50">
        {/* //menu */}
        <div className="flex">
          <NavbarCategory index={index} isOpen={isOpen} />
          <NavbarPromotion index={index} isOpen={isOpen} />
          <NavbarServices index={index} isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}
