import {useNavigate} from 'react-router-dom';

import {MdEdit, MdDelete, MdOutlineRemoveRedEye} from 'react-icons/md';

import {ADMIN_PRODUCT_EDIT} from '../../../../config/routing';

export default function ManageAction() {
  const navigate = useNavigate();

  const handleOnClickEdit = () => {
    navigate(ADMIN_PRODUCT_EDIT);
  };
  return (
    <div className="grid grid-cols-3">
      <button
        className="flex justify-center hover:text-cerulean-blue-800"
        onClick={handleOnClickEdit}
      >
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
