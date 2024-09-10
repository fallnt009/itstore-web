export default function SidebarFilterCheckBoxItem({item}) {
  return (
    <div
      className="flex hover:text-indigo-600 items-center text-base px-2 gap-2"
      key={item.id}
    >
      <input type="checkbox" className="scale-150 cursor-pointer" /> {item.text}
    </div>
  );
}
