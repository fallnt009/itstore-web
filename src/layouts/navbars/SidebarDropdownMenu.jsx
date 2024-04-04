import SidebarDropdownItem from './SidebarDropdownItem';

export default function SidebarDropdownMenu({subCategory}) {
  return (
    <div className="flex flex-col items-start gap-1">
      {subCategory.map((el) => (
        <SidebarDropdownItem key={el.id} to={el.pathname}>
          {el.title}
        </SidebarDropdownItem>
      ))}
    </div>
  );
}
