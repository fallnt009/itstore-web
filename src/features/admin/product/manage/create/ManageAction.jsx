import {useNavigate} from 'react-router-dom';

import {MdEdit, MdDelete, MdOutlineRemoveRedEye} from 'react-icons/md';

import {
  ADMIN_PRODUCT_EDIT,
  ADMIN_PRODUCT_PREVIEW,
} from '../../../../../config/routing';

export default function ManageAction({id}) {
  const navigate = useNavigate();

  const handleOnClickEdit = (id) => {
    navigate(ADMIN_PRODUCT_EDIT(id));
  };
  const handleOnClickPreview = (id) => {
    navigate(ADMIN_PRODUCT_PREVIEW(id));
  };
  return (
    <div className="flex justify-center gap-5 items-center">
      <button
        className="flex justify-center items-center hover:text-cerulean-blue-800"
        onClick={() => handleOnClickEdit(id)}
      >
        <MdEdit size={15} />
      </button>
      <button
        className="flex justify-center items-center hover:text-cerulean-blue-800"
        onClick={() => handleOnClickPreview(id)}
      >
        <MdOutlineRemoveRedEye size={15} />
      </button>
      <button className=" flex justify-center items-center text-red-500 hover:text-stone-500">
        <MdDelete size={15} />
      </button>
    </div>
  );
}
