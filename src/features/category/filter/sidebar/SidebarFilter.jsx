import SidebarFilterCheckBox from './SidebarFilterCheckBox';
import SidebarFilterSearch from './SidebarFilterSearch';

export default function SidebarFilter({specItems, specProduct}) {
  //filter by keyword //apply
  //filter by checkbox just click

  //fetch Brand that belongs to CPU
  //fetch Series
  //fetch Socket
  //fetch Core
  //fetch Thread
  return (
    <div className="p-4 border-r">
      <div className="font-semibold">
        <h1 className="text-xl">Filter</h1>
      </div>
      <SidebarFilterSearch />
      <SidebarFilterCheckBox specItems={specItems} specProduct={specProduct} />
    </div>
  );
}
