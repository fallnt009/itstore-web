import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';

import {MdArrowBack} from 'react-icons/md';

import {ADMIN_PRODUCT_MANAGE} from '../../../../config/routing';
import {UNEXPECTED_ERROR} from '../../../../config/messages';
import useProduct from '../../../../hooks/useProduct';

import ManageBreadCrumb from './breadcrumb/ManageBreadCrumb';
import PreviewImages from './preview/PreviewImages';

export default function ManagePreview() {
  const {id} = useParams();
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({});

  const {fetchProductById} = useProduct();

  //fetch product + productImage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await fetchProductById(id);

        const productData = product.data.result;
        setProduct(productData);
        setImages(productData.ProductImages);

        console.log(productData);
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
      }
    };
    fetchData();
  }, [fetchProductById]);

  const navigate = useNavigate();

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
            <PreviewImages images={images} />
          </div>
          <div className="pt-5">
            <h1 className="font-bold">Product Information</h1>
            <div className="py-2 px-5 text-sm">
              <div className="flex flex-col gap-2 py-2">
                <h4 className="font-semibold">Name</h4>
                <p>{product.title}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold">Price</h4>
                <p>{product.price}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-semibold">Quantity</h4>
                <p>{product.qtyInStock}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold">Description</h4>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
          <div className="py-5">
            <h1 className="font-bold">Product Specification</h1>
            <div className="py-2 px-5 text-sm">Spec Content</div>
          </div>
        </div>
      </div>
    </div>
  );
}
