import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {MdArrowBack} from 'react-icons/md';

import useAdmin from '../../../../../../hooks/useAdmin';

import ManageBreadCrumb from '../../breadcrumb/ManageBreadCrumb';
import SpecFilter from '../filter/SpecFilter';
import SpecPreviewContent from './SpecPreviewContent';

export default function SpecPreview() {
  const {id} = useParams();
  const {fetchSpecProduct, fetchSubCategory} = useAdmin();

  const [selectSubCategory, setSelectSubCategory] = useState(null);

  console.log(selectSubCategory);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchSubCategory();
        await fetchSpecProduct(id, selectSubCategory);
      } catch (err) {}
    };
    fetchData();
  }, [fetchSubCategory, fetchSpecProduct, id, selectSubCategory]);

  const handleOnClickBack = () => {};
  //specItemId,

  return (
    <div className="px-40 pb-10">
      <div>
        <ManageBreadCrumb />
        <div className="py-5 px-10 border rounded-lg text-stone-800 shadow-md">
          <div className="flex gap-1 items-center py-5">
            <button
              type="button"
              className="text-cerulean-blue-600"
              onClick={handleOnClickBack}
            >
              <MdArrowBack />
            </button>
            <h1 className="font-bold">Preview %TITLE%</h1>
          </div>

          <div className="py-5">
            <h1 className="font-bold">%TITLE% Information</h1>
          </div>
          <div>
            <SpecFilter
              selectSubCategory={selectSubCategory}
              setSelectSubCategory={setSelectSubCategory}
            />
            <SpecPreviewContent />
          </div>
        </div>
      </div>
    </div>
  );
}
