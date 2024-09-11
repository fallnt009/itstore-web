import SidebarFilterCheckBoxItem from './SidebarFilterCheckBoxItem';

export default function SidebarFilterCheckBox({
  specItems,
  specProduct,
  filters,
  onSelect,
}) {
  //if not have specProduct
  //specItems must not shown
  //cpu //get only Brand,Series and socket
  //spec Item can be selected

  //choose SpecItems
  //use SpecItem id to filter
  // console.log(filters);

  return (
    <>
      {specItems?.map((item) => (
        <div
          className="flex flex-col gap-3 py-5 border-b text-gray-600"
          key={item.id}
        >
          <h1 className="font-semibold text-gray-700 text-xl">{item.title}</h1>
          {specProduct
            ?.filter((detail) => detail.SpecSubcategory.SpecItem.id === item.id)
            .map((filtered) => (
              <SidebarFilterCheckBoxItem
                key={filtered.id}
                item={filtered}
                isChecked={filters.includes(filtered)}
                onSelect={onSelect}
              />
            ))}
        </div>
      ))}
    </>
  );
}
