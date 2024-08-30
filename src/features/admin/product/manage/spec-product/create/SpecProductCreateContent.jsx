import {MdEdit} from 'react-icons/md';

import CreateContentItem from './item/CreateContentItem';

export default function SpecProductCreateContent({
  specItems,
  specDetail,
  onSelect,
}) {
  //Click Edit to show popup
  //in Popup
  //can create multiple per each title
  //edit and delete
  //have save button

  return (
    <div>
      <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2 bg-gray-200 p-2 rounded-lg text-gray-600 font-semibold">
        <h1>Title</h1>
        <h1>Description</h1>
      </div>
      {specItems?.map((item) => (
        <div className="flex flex-col gap-2 py-5 px-2 border-b" key={item.id}>
          <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2">
            <h4 className="flex items-center font-semibold">{item.title}</h4>
            <div className="flex flex-col gap-1 text-xs">
              {specDetail
                ?.filter(
                  (detail) =>
                    detail.SpecProduct.specSubcategoryId ===
                    item.SpecSubcategory.id
                )
                .map((filtered) => (
                  <CreateContentItem key={filtered.id} item={filtered} />
                ))}
            </div>
            <button
              type="button"
              className="hover:text-indigo-500"
              onClick={() => onSelect(item)}
            >
              <MdEdit size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
