export default function SidebarDropdownMenu({subCategory}) {
  return (
    <div className="flex flex-col items-start gap-1">
      {subCategory.map((el) => (
        <div className="w-full p-2 hover:bg-cerulean-blue-100 w">
          <span></span>
          <button key={el.id}>{el.title}</button>
        </div>
      ))}
    </div>
  );
}
