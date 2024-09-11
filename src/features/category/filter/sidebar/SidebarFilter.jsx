import SidebarFilterCheckBox from './SidebarFilterCheckBox';
import SidebarFilterSearch from './SidebarFilterSearch';

export default function SidebarFilter({
  specItems,
  specProduct,
  filters,
  onSelect,
  onClear,
}) {
  //filter by keyword //apply
  //filter by checkbox just click

  //fetch Brand that belongs to CPU
  //fetch Series
  //fetch Socket
  //fetch Core
  //fetch Thread
  return (
    <div className="p-4 border-r">
      <div className="flex justify-between items-center font-semibold">
        <h1 className="text-xl">Filter</h1>
        <button
          type="button"
          className="p-2 text-indigo-600 hover:text-gray-500 font-semibold"
          onClick={onClear}
        >
          Clear All
        </button>
      </div>
      <SidebarFilterSearch />
      <SidebarFilterCheckBox
        specItems={specItems}
        specProduct={specProduct}
        filters={filters}
        onSelect={onSelect}
      />
    </div>
  );
}
