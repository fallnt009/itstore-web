export default function Sidebar() {
  const sidebarMenu = [
    'Component(DIY)',
    'Monitor',
    'Gaming Gear',
    'Network',
    'UPS',
    'Software',
    'Comset',
    'Accessories',
    'Desktop PC',
    'Laptop',
    'Console',
  ];
  return (
    <div>
      <div className="flex flex-col mt-5 text-xl font-medium text-cerulean-blue-800 border-r-4">
        {sidebarMenu.map((el) => (
          <div className="bg-white p-3 pl-8 hover:bg-cerulean-blue-100 cursor-pointer">
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
