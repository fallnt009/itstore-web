import {useNavigate} from 'react-router-dom';
import {MdAdd} from 'react-icons/md';

import {SPEC_ITEM_CREATE} from '../../../../../../config/routing';

export default function SpecHeader() {
  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate(SPEC_ITEM_CREATE);
  };
  return (
    <div className="px-10 pt-5">
      <div className="flex justify-between py-4">
        <div>
          <h1 className="text-indigo-600 font-semibold text-2xl">
            Product Specification
          </h1>
          <p className="text-gray-500 text-sm">Manage Specification</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-1 p-2 border rounded-lg text-indigo-600 border-indigo-600 hover:font-semibold hover:border-2 h-11 w-36"
          onClick={handleClickCreate}
        >
          <span>
            <MdAdd />
          </span>
          Create Specs
        </button>
      </div>
    </div>
  );
}
