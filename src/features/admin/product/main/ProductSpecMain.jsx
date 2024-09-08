import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';

import useAdmin from '../../../../hooks/useAdmin';

import {UNEXPECTED_ERROR} from '../../../../config/messages';

import SpecHeader from '../manage/spec/header/SpecHeader';
import SpecLists from '../manage/spec/lists/SpecLists';
import SpecFilter from '../manage/spec/filter/SpecFilter';
import ManageBreadCrumb from '../manage/utils/ManageBreadCrumb';

export default function ProductSpecMain() {
  const {specItems, fetchAllSpecItem, fetchSubCategory} = useAdmin();

  //pages and order
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  //selected filter
  const [selectSubCategoryId, setSelectSubCategoryId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchSubCategory();
        //fetch product with All Spec
        const res = await fetchAllSpecItem(page, 15, selectSubCategoryId);
        setTotalPage(res);
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
      }
    };
    fetchData();
  }, [fetchAllSpecItem, fetchSubCategory, selectSubCategoryId, page]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="px-40 pb-10">
      <ManageBreadCrumb />
      <div className="border rounded-lg shadow-md">
        <SpecHeader />
        <div className="px-10">
          <SpecFilter
            selectSubCategory={selectSubCategoryId}
            setSelectSubCategory={setSelectSubCategoryId}
          />
        </div>
        <SpecLists
          specItems={specItems}
          page={page}
          totalPages={totalPage}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
}
