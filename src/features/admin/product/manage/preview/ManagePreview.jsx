import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';

import {MdArrowBack} from 'react-icons/md';

import {ADMIN_PRODUCT_MANAGE} from '../../../../../config/routing';
import {UNEXPECTED_ERROR} from '../../../../../config/messages';

import useProduct from '../../../../../hooks/useProduct';
import useLoading from '../../../../../hooks/useLoading';

import ManageBreadCrumb from '../breadcrumb/ManageBreadCrumb';
import PreviewImages from './images/PreviewImages';
import SInfo from './specification/SInfo';
import SContent from './specification/SContent';

export default function ManagePreview() {
  const {id} = useParams();

  const {productPreview, fetchProductPreview} = useProduct();
  const {startLoading, stopLoading} = useLoading();

  const navigate = useNavigate();

  const {ProductImages} = productPreview;

  useEffect(() => {
    const fetchData = async () => {
      startLoading();
      try {
        //productId
        await fetchProductPreview(id);
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
      } finally {
        stopLoading();
      }
    };
    fetchData();
  }, [fetchProductPreview, id]);

  const handleOnClickBack = () => {
    navigate(ADMIN_PRODUCT_MANAGE);
  };

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
            <h1 className="font-bold">Preview Product</h1>
          </div>
          <div>
            <PreviewImages images={ProductImages} />
          </div>
          <div className="py-5">
            <h1 className="font-bold">Product Information</h1>
          </div>
          <SInfo product={productPreview} />
          <div className="py-5">
            <h1 className="font-bold">Product Specification</h1>
            <div className="text-sm">
              <SContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
