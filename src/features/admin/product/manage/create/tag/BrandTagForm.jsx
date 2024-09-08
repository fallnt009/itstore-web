import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';

import useAdmin from '../../../../../../hooks/useAdmin';
import useLoading from '../../../../../../hooks/useLoading';

import FormHeader from '../form/FormHeader';
import BrandTagBC from './BrandTagBC';
import BrandTagBCS from './BrandTagBCS';

import {
  CREATE_SUCCESS,
  UNEXPECTED_ERROR,
} from '../../../../../../config/messages';

export default function BrandTagForm({closeDrawer}) {
  const {fetchBrand, fetchCategory, fetchSubCategory, addBrandTags} =
    useAdmin();
  const {startLoading, stopLoading} = useLoading();

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

  const handleSubmitCreate = async (e) => {
    e.preventDefault();

    const data = {
      brandId: selectBrand,
      categoryId: selectCategory,
      subCategoryId: selectSubCategory,
    };
    startLoading();
    try {
      const res = await addBrandTags(data);
      if (res) {
        toast.error(res);
      } else {
        toast.success(CREATE_SUCCESS);
        closeDrawer();
      }
    } catch (err) {
      toast.error(UNEXPECTED_ERROR);
    } finally {
      stopLoading();
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
