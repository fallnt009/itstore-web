import {MdAdd} from 'react-icons/md';
import useAdmin from '../../../hooks/useAdmin';

import BrandTagItem from './BrandTagItem';

export default function BrandTagList({handleOnClick, active}) {
  const {brandTag} = useAdmin();

  return (
    <div>
      <div className="grid grid-cols-4 border-b-2 font-semibold py-2 text-cerulean-blue-800">
        <div className="flex justify-center">ID</div>
        <div className="flex justify-center">Brand</div>
        <div className="flex justify-center">Sub Category</div>
        <div className="flex justify-center">Action</div>
      </div>
      <div className="overflow-y-scroll h-48">
        {brandTag?.map((item) => (
          <BrandTagItem
            key={item.id}
            id={item.id}
            active={active}
            item={item}
            brandCategory={item.BrandCategory}
            subCategory={item.SubCategory}
            handleOnClick={handleOnClick}
          />
        ))}
      </div>
      <div className="py-4">
        <button className="flex items-center gap-2 font-semibold border-2 p-2 rounded-md text-cerulean-blue-800 hover:border-cerulean-blue-800">
          <span>
            <MdAdd size={25} />
          </span>
          Manage Tags
        </button>
        <p className="text-sm text-stone-500 pt-2">
          *brand tag is not exist? create new one
        </p>
      </div>
    </div>
  );
}
