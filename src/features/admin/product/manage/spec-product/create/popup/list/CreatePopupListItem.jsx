import {MdEdit, MdDelete} from 'react-icons/md';

export default function CreatePopupListItem({item}) {
  return (
    <div className="grid grid-cols-[0.5fr_1fr_0.5fr_6fr_1fr] py-2 px-2 border-b">
      <div>{item.id}</div>
      {item.value ? (
        <>
          <div className="flex justify-center gap-4">
            <h4>{item.value}</h4>
          </div>
          <span className="flex justify-center">X</span>
        </>
      ) : (
        <>
          <div className="flex justify-center gap-4">
            <h4></h4>
          </div>
          <span></span>
        </>
      )}
      <h4>{item.text}</h4>
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
