import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {MdArrowBack} from 'react-icons/md';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {ADMIN_PRODUCT_MANAGE} from '../../../../config/routing';

import MultiUploader from '../../../../components/MultiUploader';

export default function ManageEdit() {
  const [selectImage, setSelectImage] = useState([]);

  const navigate = useNavigate();

  const handleOnClickBack = () => {
    navigate(ADMIN_PRODUCT_MANAGE);
  };
  return (
    <div className="px-40 pb-10">
      <div>
        <div className="py-5 flex items-center text-sm gap-2">
          <p className="text-cerulean-blue-600">Dashboard</p>
          <span className="text-cerulean-blue-600">
            <MdKeyboardArrowRight />
          </span>
          <p className="text-cerulean-blue-600">Product</p>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <p>Edit</p>
        </div>
        <div className="py-5 px-10 border rounded-lg text-stone-800 shadow-md">
          <div className="flex gap-1 items-center py-5">
            <button
              className="text-cerulean-blue-600"
              onClick={handleOnClickBack}
            >
              <MdArrowBack />
            </button>
            <h1 className="font-bold">Edit Product</h1>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">Name</h4>
              <input
                type="text"
                className="border rounded-lg p-2 shadow-inner"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">Price</h4>
              <input
                type="text"
                className="border rounded-lg p-2 shadow-inner"
              />
            </div>
            <div className="py-5 text-xs">
              <button className="p-2 px-3 border rounded-lg border-cerulean-blue-600 text-cerulean-blue-600 hover:font-semibold w-34">
                Select Product Tags
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">Description</h4>
              <textarea
                rows="4"
                className="border rounded-lg p-2 shadow-inner"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">Quantity</h4>
              <input
                type="text"
                className="border rounded-lg p-2 shadow-inner w-24"
              />
            </div>
            <div className="py-2">
              <h4 className="font-semibold">Upload Image</h4>
              {/* Preview  */}
              {/* Upload Zone */}
              <div className="py-5">
                <MultiUploader
                  select={selectImage}
                  setSelect={setSelectImage}
                />
              </div>
            </div>
          </div>
          <div className="py-5 text-xs">
            <button
              type="submit"
              className="p-2 px-3 rounded-lg bg-cerulean-blue-600 text-white hover:bg-stone-400"
            >
              Save Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
