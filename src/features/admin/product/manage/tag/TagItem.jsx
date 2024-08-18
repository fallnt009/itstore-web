import {MdAdd, MdCheck} from 'react-icons/md';

export default function TagItem({
  id,
  item,
  brandCategory,
  subCategory,
  handleOnClick,
  active,
}) {
  const {Brand} = brandCategory;
  const {title} = subCategory;
  return (
    <div className="grid grid-cols-4 py-2 border-b-2 text-stone-700 ">
      <div className="flex justify-center items-center">{id}</div>
      <div className="flex justify-center items-center">{Brand.title}</div>
      <div className="flex justify-center items-center">{title}</div>
      <div className="flex justify-center gap-2 px-2">
        {active === id ? (
          <button className="flex gap-2 items-center border-2 text-xs rounded-md p-1  text-green-600 border-green-600 font-semibold h-6">
            <span>
              <MdCheck />
            </span>
            Select
          </button>
        ) : (
          <button
            className="flex gap-2 items-center border text-xs rounded-md p-1 border-stone-400 hover:border-cerulean-blue-800 hover:text-cerulean-blue-800  h-6"
            onClick={() => handleOnClick(id, item)}
          >
            <span>
              <MdAdd />
            </span>
            Select
          </button>
        )}
      </div>
    </div>
  );
}
