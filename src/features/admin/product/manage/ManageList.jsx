import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';

import ManageListItem from './ManageListItem';

import ParginationButton from '../../../../components/ParginationButton';

export default function ManageList() {
  return (
    <div className="px-10 py-5">
      <div className="grid grid-cols-[0.5fr_6fr_2fr_2fr_1.5fr]  bg-stone-100 p-2 rounded-lg text-stone-600 font-semibold text-sm">
        <div className="flex gap-1">
          Id
          <button>
            <MdKeyboardArrowUp />
          </button>
        </div>
        <div>Name</div>
        <div>Price</div>
        <div>Category</div>
        <div>Actions</div>
      </div>
      <ManageListItem />
      <div className="flex justify-center gap-2 py-5">
        <ParginationButton page={1} totalPages={10} />
      </div>
    </div>
  );
}
