import {useNavigate} from 'react-router-dom';

import {MdEdit, MdDelete, MdOutlineRemoveRedEye} from 'react-icons/md';

import {
  ADMIN_PRODUCT_EDIT,
  ADMIN_PRODUCT_PREVIEW,
} from '../../../../config/routing';

export default function ManageAction({id}) {
  const navigate = useNavigate();

  const handleOnClickEdit = (id) => {
    navigate(ADMIN_PRODUCT_EDIT(id));
  };
  const handleOnClickPreview = (id) => {
    navigate(ADMIN_PRODUCT_PREVIEW(id));
  };
  const handleOnClickDelete = () => {};
  return (
    <div className="grid grid-cols-3">
      <button
        className="flex justify-center hover:text-cerulean-blue-800"
        onClick={() => handleOnClickEdit(id)}
      >
        <MdEdit />
      </button>
      <button
        className="flex justify-center hover:text-cerulean-blue-800"
        onClick={() => handleOnClickPreview(id)}
      >
        <MdOutlineRemoveRedEye />
      </button>
      <button className=" flex justify-center text-red-500 hover:text-stone-500">
        <MdDelete />
      </button>
    </div>
  );
}
