import {MdEdit, MdDelete} from 'react-icons/md';

export default function SpecProductAction({item, onEdit, onDelete, onSelect}) {
  //Edit Page
  //delete popup

  const handleSelectEdit = (e) => {
    e.preventDefault();
    onSelect(item);
    onEdit();
  };

  const handleSelectDelete = (e) => {
    e.preventDefault();
    onSelect(item);
    onDelete();
  };

  return (
    <div className="grid grid-cols-2 items-center">
      <button
        type="button"
        className="flex justify-center hover:text-cerulean-blue-800"
        onClick={handleSelectEdit}
      >
        <MdEdit />
      </button>
      <button
        type="button"
        className="flex justify-center text-red-500 hover:text-stone-500"
        onClick={handleSelectDelete}
      >
        <MdDelete />
      </button>
    </div>
  );
}
