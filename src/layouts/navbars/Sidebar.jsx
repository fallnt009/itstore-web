import SidebarMenu from './SidebarMenu';

export default function Sidebar() {
  return (
    <div>
      <div className="flex flex-col mt-5 text-xl font-medium text-cerulean-blue-800 border-r-4">
        <SidebarMenu />
      </div>
    </div>
  );
}
