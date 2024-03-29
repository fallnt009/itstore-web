import SidebarDropdownMenu from './SidebarDropdownMenu';

export default function SidebarDropdown({subCategory}) {
  return (
    <div className="relative inline-block w-full">
      <SidebarDropdownMenu subCategory={subCategory} />
    </div>
  );
}
