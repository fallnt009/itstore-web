import {useEffect, useState} from 'react';

import useAdmin from '../../hooks/useAdmin';

import BrandTagList from './BrandTagList';

export default function PanelProductMain() {
  //select brand first and
  //slect mainCategory that have that brand Id
  //find brandcategory id that brandId and MaincategoryId match
  //find sub category by match bc id to bcs
  //use subc and brandCa id match in bcs
  //get bcsId
  //create product and bound with bcsId earlier

  //for front
  //get id from brand
  const {brands, fetchBrand, fetchBrandTag} = useAdmin();
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    fetchBrand();
  }, [fetchBrand]);

  //add async and await ,add loading??
  const handleSelect = (e) => {
    setSelectedId(e.target.value);
    if (selectedId) {
      fetchBrandTag(selectedId);
    }
  };

  //get BC

  //use brandId to find BC+ Main Category + BCS + Sub Category
  return (
    <div className="py-2 px-5 border">
      <div className="flex items-center gap-5">
        <h1 className="text-xl font-semibold text-cerulean-blue-800">
          Create Product
        </h1>
      </div>
      <div>
        <h1 className="text-stone-500">Select Existing Brand</h1>
        <select className="p-2 rounded-md border-2" onClick={handleSelect}>
          <option value="">Choose Brand</option>
          {brands?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="text-sm text-stone-500">Or create new brand</p>
      </div>
      <div className="flex items-center gap-5 py-3">
        <h1 className="text-xl font-semibold text-cerulean-blue-800">
          Select Product Brand Tag
        </h1>

        <p className="text-sm text-stone-500 ">
          brand tag is not exist? create new
        </p>
      </div>
      <div className="flex">
        <BrandTagList />
      </div>
    </div>
  );
}
