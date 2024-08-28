import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';

import {MdArrowBack} from 'react-icons/md';

import {ADMIN_PRODUCT_MANAGE} from '../../../../config/routing';
import {UNEXPECTED_ERROR} from '../../../../config/messages';
import useProduct from '../../../../hooks/useProduct';

import ManageBreadCrumb from './breadcrumb/ManageBreadCrumb';
import PreviewImages from './preview/PreviewImages';
import SpecProductContent from './spec-product/SpecProductContent';

export default function ManagePreview() {
  const {id} = useParams();
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({});
  const [bcs, setBcs] = useState({});

  const {fetchProductById} = useProduct();
  const navigate = useNavigate();

  //fetch product + productImage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await fetchProductById(id);

        const productData = product.data.result;
        setProduct(productData);
        setImages(productData.ProductImages);
        setBcs(productData.ProductSubCategory.BrandCategorySub);
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
      }
    };
    fetchData();
  }, [fetchProductById]);

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
          <div className="py-5">
            <h1 className="font-bold">Product Information</h1>
          </div>
          <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2 bg-gray-200 p-2 rounded-lg text-gray-600 font-semibold text-sm">
            <h1>Title</h1>
            <h1>Description</h1>
          </div>
          <div className="flex flex-col gap-2 py-5 px-2 border-b">
            <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2 text-sm">
              <h4 className="flex items-center font-semibold">Name</h4>
              <div className="flex flex-col gap-1 text-xs">
                <div className="flex items-center gap-2">{product.title}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-5 px-2 border-b">
            <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2 text-sm">
              <h4 className="flex items-center font-semibold">Price</h4>
              <div className="flex flex-col gap-1 text-xs">
                <div className="flex items-center gap-2">{product.price}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-5 px-2 border-b">
            <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2 text-sm">
              <h4 className="flex items-center font-semibold">Quantity</h4>
              <div className="flex flex-col gap-1 text-xs">
                <div className="flex items-center gap-2">
                  {product.qtyInStock}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-5 px-2 border-b">
            <div className="grid grid-cols-[1.5fr_7fr_2fr] gap-2 text-sm">
              <h4 className="flex items-center font-semibold">Description</h4>
              <div className="flex flex-col gap-1 text-xs">
                <div className="flex items-center gap-2">
                  {product.description}
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <h1 className="font-bold">Product Specification</h1>
            <div className="text-sm">
              <SpecProductContent bcs={bcs} product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
