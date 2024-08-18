import {useState, useEffect} from 'react';
import useAdmin from '../../../hooks/useAdmin';
import useLoading from '../../../hooks/useLoading';

import ManageHeader from '../product/manage/ManageHeader';
import ManageList from '../product/manage/ManageList';
import ManageFilter from '../product/manage/ManageFilter';

export default function ProductManage() {
  const {
    products,
    fetchAllProduct,
    fetchBrand,
    fetchCategory,
    fetchSubCategory,
  } = useAdmin();
  const {startLoading, stopLoading} = useLoading();
  //pages and order
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [order, setOrder] = useState('ASC');

  //selected
  const [selectBrand, setSelectBrand] = useState('');
  const [selectCategory, setSelectCategory] = useState('');
  const [selectSubCategory, setSelectSubCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      startLoading();
      try {
        //fetch brand ,category and subcategory
        await Promise.all([fetchBrand(), fetchCategory(), fetchSubCategory()]);
        //fetch product
        const res = await fetchAllProduct(
          page,
          8,
          order,
          selectBrand,
          selectCategory,
          selectSubCategory
        );
        setTotalPage(res);
      } catch (err) {
        //error handler
      } finally {
        stopLoading();
      }
    };
    fetchData();
  }, [
    fetchAllProduct,
    fetchBrand,
    fetchCategory,
    fetchSubCategory,
    page,
    order,
    selectBrand,
    selectCategory,
    selectSubCategory,
  ]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };
  return (
    <div className="px-40">
      <div className="border-r border-l">
        <ManageHeader />
        <ManageFilter
          selectBrand={selectBrand}
          selectCategory={selectCategory}
          selectSubCategory={selectSubCategory}
          setSelectBrand={setSelectBrand}
          setSelectCategory={setSelectCategory}
          setSelectSubCategory={setSelectSubCategory}
        />
        <ManageList
          products={products}
          page={page}
          totalPages={totalPage}
          order={order}
          onChangePage={handleChangePage}
          setOrder={setOrder}
        />
      </div>
    </div>
  );
}
