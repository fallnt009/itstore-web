import {useNavigate} from 'react-router-dom';
import {ADMIN_PRODUCT_CREATE} from '../../../../config/routing';
import {MdAdd} from 'react-icons/md';

export default function ManageHeader() {
  const navigate = useNavigate();
  const handleOnClickNavigate = () => {
    navigate(ADMIN_PRODUCT_CREATE);
  };
  return (
    <div className="px-10 pt-5">
      <div className="flex justify-between py-4">
        <div>
          <h1 className="text-cerulean-blue-800 font-semibold text-2xl">
            Products
          </h1>
          <p className="text-stone-500 text-sm">Manage Product</p>
        </div>
        <button
          className="flex items-center gap-1 p-2 border rounded-lg text-cerulean-blue-800 border-cerulean-blue-800 hover:font-semibold hover:border-2 h-11 w-40"
          onClick={handleOnClickNavigate}
        >
          <span>
            <MdAdd />
          </span>
          Create Product
        </button>
      </div>
    </div>
  );
}
