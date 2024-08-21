import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';

import {MdArrowBack} from 'react-icons/md';
import {ADMIN_PRODUCT_MANAGE} from '../../../../config/routing';
import {UNEXPECTED_ERROR, CREATE_SUCCESS} from '../../../../config/messages';

import Popup from '../../../../components/Popup';
import Input from '../../../../components/Input';
import TextArea from '../../../../components/TextArea';

import ManageTag from './tag/ManageTag';
import ManageBreadCrumb from './breadcrumb/ManageBreadCrumb';
import TagPreview from './tag/TagPreview';

import useProduct from '../../../../hooks/useProduct';
import useLoading from '../../../../hooks/useLoading';

import validateProduct from '../../../../validators/validate-product';
import UploadContent from './uploader/UploadContent';

const dataForm = {
  title: '',
  price: '',
  description: '',
  qtyInStock: 0,
};

export default function ManageEdit() {
  const {id} = useParams();

  const [selectImage, setSelectImage] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [bcsId, setBcsId] = useState(null);
  const [bcsData, setBcsData] = useState(null);
  const [input, setInput] = useState(dataForm);
  const [error, setError] = useState({});

  const {fetchProductById, fetchBrandTagByBcsId, updateProduct} = useProduct();

  const {startLoading, stopLoading} = useLoading();

  const navigate = useNavigate();
  //fetch by useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        //fetch product by id
        const product = await fetchProductById(id);

        const productData = product.data.result;
        const brandCategoryId =
          productData.ProductSubCategory.brandCategorySubId;
        //setBcsId
        setBcsId(brandCategoryId);
        // Populate the input state with fetched product data
        setInput({
          title: productData.title,
          price: productData.price,
          description: productData.description,
          qtyInStock: productData.qtyInStock,
        });
        //fetchBrandTag and setBrandTagData
        if (brandCategoryId) {
          const brandTag = await fetchBrandTagByBcsId(brandCategoryId);
          setBcsData(brandTag);
        }
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
      }
    };
    fetchData();
  }, [fetchProductById, fetchBrandTagByBcsId, id]);

  const handleOnClickBack = () => {
    navigate(ADMIN_PRODUCT_MANAGE);
  };

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  //handleChangeInput
  const handleChangeInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  };
  //handleSubmitCreate
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    startLoading();

    const formData = new FormData();
    //append product data
    formData.append('title', input.title);
    formData.append('price', input.price);
    formData.append('description', input.description);
    formData.append('qtyInStock', input.qtyInStock);
    //append new bcsId
    if (bcsId) {
      formData.append('bcsId', bcsId);
    }

    //if image is selected
    if (selectImage.length > 0) {
      selectImage.forEach((imgObj, index) => {
        formData.append('productImage', imgObj.file);
      });
    }

    try {
      e.preventDefault();
      const result = validateProduct(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        // update Product and image
        const res = await updateProduct(id, formData);
        //Clear Image
        setSelectImage([]);
        //need to response only if error
        if (res) {
          toast.error(res);
        } else {
          toast.success(CREATE_SUCCESS);
        }
      }
    } catch (err) {
      //handle error
      toast.error(UNEXPECTED_ERROR);
    } finally {
      stopLoading();
    }
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
            <h1 className="font-bold">Edit Product</h1>
          </div>
          <form
            className="flex flex-col gap-2 text-sm"
            onSubmit={handleSubmitUpdate}
          >
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">Name</h4>
              <Input
                name="title"
                value={input.title}
                error={error.title}
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">Price</h4>
              <Input
                name="price"
                value={input.price}
                error={error.price}
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex gap-2 py-5 text-xs">
              <button
                type="button"
                onClick={handleOpenPopup}
                className="p-2 px-3 border rounded-lg border-cerulean-blue-600 text-cerulean-blue-600 hover:font-semibold w-36"
              >
                Select Product Tags
              </button>
              <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                <ManageTag
                  onClose={handleClosePopup}
                  setBcsId={setBcsId}
                  bcsData={bcsData}
                  setBcsData={setBcsData}
                  bcsId={bcsId}
                />
              </Popup>
              <div className="px-2">
                <TagPreview data={bcsData} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">Description</h4>
              <TextArea
                rows="4"
                name="description"
                value={input.description}
                error={error.description}
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">Quantity</h4>
              <Input
                name="qtyInStock"
                type="number"
                width="24"
                value={input.qtyInStock}
                error={error.qtyInStock}
                onChange={handleChangeInput}
              />
            </div>
            <div className="py-2">
              <h4 className="font-semibold">Upload Image</h4>
              {/* Preview  */}
              {/* Upload Zone */}
              <div className="py-5">
                <UploadContent
                  selectImage={selectImage}
                  setSelectImage={setSelectImage}
                />
              </div>
            </div>
            <div className="flex py-2 text-xs ">
              {bcsData ? (
                <button
                  type="submit"
                  className="p-2 px-3 rounded-lg bg-cerulean-blue-600 text-white hover:bg-stone-400"
                >
                  Save Product
                </button>
              ) : (
                <div
                  type="submit"
                  className="p-2 px-3 rounded-lg  text-white bg-stone-400"
                >
                  Save Product
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
