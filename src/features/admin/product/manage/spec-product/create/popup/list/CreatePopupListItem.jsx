import {MdEdit, MdDelete} from 'react-icons/md';

export default function CreatePopupListItem() {
  return (
    <div className="grid grid-cols-[1fr_6fr_1fr] py-2 px-2">
      <div className="flex justify-center gap-5">
        <h4>1</h4>
        <span>X</span>
      </div>
      <h4>Title Example</h4>
      <div className="flex items-center justify-center gap-2">
        <button type="button">
          <MdEdit size={15} />
        </button>
        <button type="button" className="text-red-500">
          <MdDelete size={15} />
        </button>
      </div>
    </div>
  );
}
