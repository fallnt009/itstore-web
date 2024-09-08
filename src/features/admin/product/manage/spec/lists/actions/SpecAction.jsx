import {useNavigate} from 'react-router-dom';
import {MdEdit, MdOutlineRemoveRedEye} from 'react-icons/md';

import {
  SPEC_ITEM_EDIT,
  SPEC_ITEM_PREVIEW,
} from '../../../../../../../config/routing';

export default function SpecAction({id, item}) {
  const navigate = useNavigate();

  const handleClickEdit = (id) => {
    navigate(SPEC_ITEM_EDIT(id));
  };

  const handleClickPreview = (id) => {
    navigate(SPEC_ITEM_PREVIEW(id), {state: item});
  };

  return (
    <div className="grid grid-cols-2">
      <button
        type="button"
        className="flex justify-center hover:text-cerulean-blue-800"
        onClick={() => handleClickEdit(id)}
      >
        <MdEdit />
      </button>
      <button
        type="button"
        className="flex justify-center hover:text-cerulean-blue-800"
        onClick={() => handleClickPreview(id)}
      >
        <MdOutlineRemoveRedEye />
      </button>
      {/* <button className=" flex justify-center text-red-500 hover:text-stone-500">
        <MdDelete />
      </button> */}
    </div>
  );
}
