import {useNavigate} from 'react-router-dom';
import {MdEdit, MdDelete} from 'react-icons/md';

import {SPEC_ITEM_EDIT} from '../../../../../../config/routing';

export default function SpecAction({id}) {
  const navigate = useNavigate();

  const handleClickEdit = (id) => {
    navigate(SPEC_ITEM_EDIT(id));
  };
  return (
    <div className="grid grid-cols-2">
      <button
        className="flex justify-center hover:text-cerulean-blue-800"
        onClick={() => handleClickEdit(id)}
      >
        <MdEdit />
      </button>
      {/* <button className="flex justify-center hover:text-cerulean-blue-800">
        <MdOutlineRemoveRedEye />
      </button> */}
      <button className=" flex justify-center text-red-500 hover:text-stone-500">
        <MdDelete />
      </button>
    </div>
  );
}
