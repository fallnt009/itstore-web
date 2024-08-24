import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';

import useAdmin from '../../../hooks/useAdmin';

import {UNEXPECTED_ERROR} from '../../../config/messages';

import SpecHeader from '../product/manage/spec/header/SpecHeader';
import SpecLists from '../product/manage/spec/lists/SpecLists';
import SpecFilter from '../product/manage/spec/filter/SpecFilter';

export default function ProductSpecManage() {
  const {specItems, fetchAllSpecItem, fetchSubCategory} = useAdmin();

  //pages and order
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  //selected filter
  const [selectSubCategory, setSelectSubCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchSubCategory();
        const res = await fetchAllSpecItem(page, 15, selectSubCategory);
        setTotalPage(res);
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
      }
    };
    fetchData();
  }, [fetchAllSpecItem, fetchSubCategory, selectSubCategory, page]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };
  return (
    <div className="px-40">
      <div className="border-r border-l">
        <SpecHeader />
        <SpecFilter
          selectSubCategory={selectSubCategory}
          setSelectSubCategory={setSelectSubCategory}
        />
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
