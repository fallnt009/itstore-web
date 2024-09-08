import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';

import {UNEXPECTED_ERROR} from '../../../../config/messages';

import useAdmin from '../../../../hooks/useAdmin';
import useLoading from '../../../../hooks/useLoading';
import useDrawer from '../../../../hooks/useDrawer';

import ManageHeader from '../manage/create/header/ManageHeader';
import ManageList from '../manage/create/ManageList';
import ManageFilter from '../manage/utils/ManageFilter';
import ManageBreadCrumb from '../manage/utils/ManageBreadCrumb';

import SideDrawer from '../../../../components/SideDrawer';

export default function ProductMain() {
  const {
    products,
    fetchAllProduct,
    fetchBrand,
    fetchCategory,
    fetchSubCategory,
  } = useAdmin();
  const {startLoading, stopLoading} = useLoading();
  const {closeDrawer, isOpen, drawerContent} = useDrawer();

  //pages and order
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [order, setOrder] = useState('ASC');

  //selected
  const [selectBrand, setSelectBrand] = useState('');
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
          selectSubCategory
        );
        setTotalPage(res);
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
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
    selectSubCategory,
  ]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="px-40 pb-10">
      <ManageBreadCrumb />
      <div className="border rounded-lg shadow-md">
        <ManageHeader />
        <ManageFilter
          selectBrand={selectBrand}
          selectSubCategory={selectSubCategory}
          setSelectBrand={setSelectBrand}
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
      <SideDrawer isOpen={isOpen} onClose={closeDrawer}>
        {drawerContent}
      </SideDrawer>
    </div>
  );
}
