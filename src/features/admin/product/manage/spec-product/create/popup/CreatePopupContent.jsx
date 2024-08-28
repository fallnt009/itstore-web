import {MdClose, MdAdd} from 'react-icons/md';

import CreatePopupList from './list/CreatePopupList';
import CreatePopupAdd from './actions/CreatePopupAdd';
import CreatePopupEdit from './actions/CreatePopupEdit';

export default function CreatePopupContent({onClose}) {
  //tomorrow
  //create state isShow between add and edit
  //make popup more dynamic on width
  //
  return (
    <div className="w-full px-5 py-2 pb-5 text-gray-600">
      <div className="flex justify-between text-base font-semibold pb-4">
        <h1>Manage %TITLE%</h1>
        <button onClick={onClose}>
          <MdClose />
        </button>
      </div>
      <div>
        <div className="grid grid-cols-[1fr_6fr_1fr] gap-2 bg-gray-200 px-2 py-1 rounded-lg text-gray-600 font-semibold text-sm pr-6">
          <h1 className="flex justify-center">Value</h1>
          <h1>Text</h1>
          <h1 className="flex justify-center">Actions</h1>
        </div>
        <div>
          <CreatePopupList />
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
        <CreatePopupAdd />
        {/* <CreatePopupEdit /> */}
      </div>
    </div>
  );
}
