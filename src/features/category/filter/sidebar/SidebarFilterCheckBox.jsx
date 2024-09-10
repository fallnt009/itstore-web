import SidebarFilterCheckBoxItem from './SidebarFilterCheckBoxItem';

export default function SidebarFilterCheckBox({specItems, specProduct}) {
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
              <SidebarFilterCheckBoxItem key={filtered.id} item={filtered} />
            ))}
        </div>
      ))}
    </>
  );
}
