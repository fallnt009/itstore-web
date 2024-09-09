import PSListItem from './PSListItem';

export default function PSList({specItems, specDetail}) {
  return (
    <div>
      <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2 bg-gray-200 p-2 rounded-lg text-gray-600 font-semibold">
        <h1>Title</h1>
        <h1>Description</h1>
      </div>
      {specItems?.map((item) => (
        <div
          className="flex flex-col gap-2 py-5 px-2 border-b text-gray-600"
          key={item.id}
        >
          <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2">
            <h4 className="flex items-center text-xs font-semibold">
              {item.title}
            </h4>
            <div className="flex flex-col gap-1 text-xs">
              {specDetail
                ?.filter(
                  (detail) =>
                    detail.SpecProduct.specSubcategoryId ===
                    item.SpecSubcategory.id
                )
                .map((filtered) => (
                  <PSListItem key={filtered.id} item={filtered} />
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
