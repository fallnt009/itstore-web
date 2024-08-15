import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';

import useAdmin from '../../../../../../hooks/useAdmin';

import FormHeader from './FormHeader';
import BrandTagBC from '../brandTags/BrandTagBC';
import BrandTagBCS from '../brandTags/BrandTagBCS';

export default function BrandTagForm({closeDrawer}) {
  const {fetchBrand, fetchCategory, fetchSubCategory, addBrandTags} =
    useAdmin();

  const [isShow, setIsShow] = useState(true);
  const [selectBrand, setSelectBrand] = useState('');
  const [selectCategory, setSelectCategory] = useState('');
  const [selectSubCategory, setSelectSubCategory] = useState('');
  //fetch brand ,category,subcategory

  useEffect(() => {
    fetchBrand();
    fetchCategory();
    fetchSubCategory();
  }, [fetchBrand, fetchCategory, fetchSubCategory]);

  //handle Select
  const handleSelectBrand = (e) => {
    setSelectBrand(e.target.value);
  };
  const handleSelectCategory = (e) => {
    setSelectCategory(e.target.value);
  };
  const handleSelectSubCategory = (e) => {
    setSelectSubCategory(e.target.value);
  };
  const handleToggleNext = () => {
    setIsShow((prev) => !prev);
  };

  const handleSubmitCreate = async () => {
    const data = {
      brandId: selectBrand,
      categoryId: selectCategory,
      subCategoryId: selectSubCategory,
    };
    try {
      const res = await addBrandTags(data);
      if (res) {
        toast.error('Tag already exist');
      } else {
        toast.success('created success');
        closeDrawer();
      }
    } catch (err) {
      toast.error('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col gap-5 px-5 py-5">
      <FormHeader title="Create Tags" closeDrawer={closeDrawer} />
      <div className="flex flex-col px-5">
        <div className="flex flex-col border-b-2 p-2">
          <h4 className="text-cerulean-blue-800  font-semibold">
            Create Brand Tags
          </h4>
          <p className="text-sm text-stone-600">Select to Create</p>
        </div>
        <div className="p-2">
          <h4 className="text-cerulean-blue-800  font-semibold pb-2">
            Preview
          </h4>
          <div className="p-2 border rounded-lg text-sm text-stone-600">
            <div>Brand</div>
            <div>Category</div>
            <div>Sub Category</div>
          </div>
        </div>
        {isShow ? (
          <BrandTagBC
            selectBrand={selectBrand}
            selectCategory={selectCategory}
            handleToggle={handleToggleNext}
            onSelectBrand={handleSelectBrand}
            onSelectCategory={handleSelectCategory}
          />
        ) : (
          <BrandTagBCS
            selectSubCategory={selectSubCategory}
            handleToggle={handleToggleNext}
            onSelectSubCategory={handleSelectSubCategory}
            onSubmit={handleSubmitCreate}
          />
        )}
      </div>
    </div>
  );
}
