import {MdClose, MdAdd} from 'react-icons/md';

import SCPopupContentList from './SCPopupContentList';
import SpecDetailAdd from './actions/SpecDetailAdd';
import SpecDetailEdit from './actions/SpecDetailEdit';

export default function SCPopupContent({
  onClose,
  selectedSpec,
  specDetail,
  product,
}) {
  return (
    <div className="w-full px-5 py-2 pb-5 text-gray-600">
      <div className="flex justify-between text-base font-semibold pb-4">
        <h1>Manage {selectedSpec?.title}</h1>
        <button onClick={onClose}>
          <MdClose />
        </button>
      </div>
      <div>
        <div className="grid grid-cols-[0.5fr_1fr_0.5fr_6fr_1fr] bg-gray-200 px-2 py-1 rounded-lg text-gray-600 font-semibold text-sm pr-5">
          <h1>Id</h1>
          <h1 className="flex justify-center">Value</h1>
          <div></div>
          <h1>Text</h1>
          <h1 className="flex justify-center">Actions</h1>
        </div>
        <div>
          <SCPopupContentList
            specDetail={specDetail}
            selectedSpec={selectedSpec}
            product={product}
          />
        </div>
      </div>
      <div className="py-4">
        <button
          type="button"
          className="flex items-center gap-1 p-2 hover:text-indigo-600 hover:border-indigo-600 border rounded-lg "
        >
          <span>
            <MdAdd />
          </span>
          Add new
        </button>
      </div>
      <div>
        <SpecDetailAdd specItemObj={selectedSpec} product={product} />
        {/* <SpecDetailEdit/> */}
      </div>
    </div>
  );
}
