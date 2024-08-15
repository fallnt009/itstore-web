import {MdEdit, MdDelete, MdOutlineRemoveRedEye} from 'react-icons/md';

export default function ManageAction() {
  return (
    <div className="grid grid-cols-3">
      <button className="flex justify-center hover:text-cerulean-blue-800">
        <MdEdit />
      </button>
      <button className="flex justify-center hover:text-cerulean-blue-800">
        <MdOutlineRemoveRedEye />
      </button>
      <button className=" flex justify-center text-red-500 hover:text-stone-500">
        <MdDelete />
      </button>
    </div>
  );
}
