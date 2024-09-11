import {MdCancel} from 'react-icons/md';

export default function ActiveFilterItem({item, onRemove}) {
  const {SpecSubcategory} = item;

  return (
    <div
      className="flex items-center border p-2 rounded-xl gap-2 border-indigo-600 bg-indigo-600 text-white font-semibold hover:bg-white hover:text-indigo-600"
      key={item.id}
    >
      {SpecSubcategory.SpecItem.title} : <p>{item.text}</p>
      <span className="cursor-pointer" onClick={() => onRemove(item)}>
        <MdCancel size={20} />
      </span>
    </div>
  );
}
