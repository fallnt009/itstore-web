import {useEffect, useState} from 'react';
import {MdAdd} from 'react-icons/md';

import useAdmin from '../../../hooks/useAdmin';
import useDrawer from '../../../hooks/useDrawer';

import BrandTagList from '../brandTags/BrandTagList';

import BrandForm from '../forms/BrandForm';
import CategoryForm from '../forms/CategoryForm';
import SubCategoryForm from '../forms/SubCategoryForm';

export default function PanelProductMain({bcsId, setBcsId, setBcsData}) {
  const {brands, fetchBrand, fetchBrandTag} = useAdmin();
  const {openDrawerWithContent, closeDrawer} = useDrawer();
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    fetchBrand();
  }, [fetchBrand]);

  const handleSelect = async (e) => {
    const brandId = e.target.value;
    setSelectedId(brandId);
    if (brandId) {
      await fetchBrandTag(brandId);
    }
  };

  const handleOnClick = (id, data) => {
    setBcsId(id);
    setBcsData(data);
  };

  const handleManageBrand = () => {
    openDrawerWithContent(<BrandForm brands={brands} />);
  };
  const handleManageCategory = () => {
    openDrawerWithContent(<CategoryForm />);
  };
  const handleManageSubCategory = () => {
    openDrawerWithContent(<SubCategoryForm />);
  };
  //now we have bcs id
  //create product first and use this bcs id to create product sub

  //use brandId to find BC+ Main Category + BCS + Sub Category
  return (
    <div className="px-10 py-5">
      <div className="grid pb-5">
        <div>
          <h1 className="text-3xl text-cerulean-blue-800 py-8">
            Getting Started on creating new product
          </h1>
          <div className="flex items-center gap-5">
            <h1 className="text-xl font-semibold text-cerulean-blue-800">
              Step 1 : Select Brand
            </h1>
          </div>
          <div>
            <h1 className="text-stone-500 py-2">Select Existing Brand</h1>
            <select className="p-2 rounded-md border-2" onClick={handleSelect}>
              <option value="">Choose Brand</option>
              {brands?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className=" grid grid-cols-3 gap-x-2 py-3">
            <button
              className="flex items-center gap-2 font-semibold border-2 p-2 rounded-md text-cerulean-blue-800 hover:border-cerulean-blue-800"
              onClick={handleManageBrand}
            >
              <span>
                <MdAdd size={25} />
              </span>
              Manage Brand
            </button>
            <button
              className="flex items-center gap-2 font-semibold border-2 p-2 rounded-md text-cerulean-blue-800 hover:border-cerulean-blue-800"
              onClick={handleManageCategory}
            >
              <span>
                <MdAdd size={25} />
              </span>
              Manage Category
            </button>
            <button
              className="flex items-center gap-2 font-semibold border-2 p-2 rounded-md text-cerulean-blue-800 hover:border-cerulean-blue-800"
              onClick={handleManageSubCategory}
            >
              <span>
                <MdAdd size={25} />
              </span>
              Manage Sub Category
            </button>
          </div>
          <p className="text-sm text-stone-500">
            *Or create new brand , category and sub category.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 py-5">
        <h1 className="text-xl font-semibold text-cerulean-blue-800">
          Step 2 : Select Product Brand Tag
        </h1>
      </div>
      <BrandTagList active={bcsId} handleOnClick={handleOnClick} />
      {/* <div className="py-5 px-5">
        <ActiveButton
          activeTitle="Proceed to next"
          inActiveTitle="Proceed to next"
          select={true}
        />
      </div> */}
    </div>
  );
}
