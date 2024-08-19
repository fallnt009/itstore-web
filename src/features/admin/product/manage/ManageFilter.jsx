import {MdFilterAlt} from 'react-icons/md';

import useAdmin from '../../../../hooks/useAdmin';
import useLoading from '../../../../hooks/useLoading';
import {useEffect} from 'react';

export default function ManageFilter({
  selectBrand,
  selectCategory,
  selectSubCategory,
  setSelectBrand,
  setSelectCategory,
  setSelectSubCategory,
}) {
  const {brands, mainCategory, subCategory} = useAdmin();
  const {startLoading, stopLoading} = useLoading();

  const handleChangeBrand = (e) => {
    setSelectBrand(e.target.value);
  };
  // const handleChangeCategory = (e) => {
  //   setSelectCategory(e.target.value);
  // };
  const handleChangeSubCategory = (e) => {
    setSelectSubCategory(e.target.value);
  };
  const handleOnClickClear = () => {
    startLoading();
    setSelectBrand('');
    setSelectCategory('');
    setSelectSubCategory('');
  };

  //check if state change ,stopLoading
  useEffect(() => {
    if (
      selectBrand === '' &&
      selectCategory === '' &&
      selectSubCategory === ''
    ) {
      stopLoading();
    }
  }, [selectBrand, selectCategory, selectSubCategory]);

  return (
    <div className="px-10 py-5 text-sm ">
      <form className="text-stone-700">
        <h1 className="flex items-center gap-1 py-2 text-xl font-semibold text-indigo-600">
          <span>
            <MdFilterAlt />
          </span>
          Filter
        </h1>
        <div className="flex rounded-lg gap-2 items-center p-2 bg-gray-200 ">
          <div>
            <select className="rounded-lg p-2 " onChange={handleChangeBrand}>
              <option value="">Choose Brand</option>
              {brands?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          {/* <div>
            <select className="rounded-lg p-2" onChange={handleChangeCategory}>
              <option>Choose Category</option>
              {mainCategory?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div> */}
          <div>
            <select
              className="rounded-lg p-2"
              onChange={handleChangeSubCategory}
            >
              <option value="">Choose Sub Category</option>
              {subCategory?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <button
            className="p-2 text-indigo-600 hover:text-gray-500 font-semibold"
            onClick={handleOnClickClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
