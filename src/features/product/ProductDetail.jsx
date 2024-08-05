import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {NumericFormat} from 'react-number-format';

import ProductDescription from './ProductDescription';

import ImageSlider from '../../components/ImageSlider';
import StockStatus from '../../components/StockStatus';
import BreadCrumb from '../../components/BreadCrumb';
import ActiveButton from '../../components/ActiveButton';

import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import ProductSpecContainer from './ProductSpecContainer';

export default function ProductDetail() {
  const {categoryName, subCategoryName, productName} = useParams();
  const {
    fetchProductInfo,
    fetchProductImage,
    productInfo,
    productSpec,
    productImages,
  } = useProduct();
  const {addCartItem} = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchProductInfo(categoryName, subCategoryName, productName);
        await fetchProductImage(productName);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [
    categoryName,
    subCategoryName,
    productName,
    fetchProductInfo,
    fetchProductImage,
  ]);

  const {id, title, price, description, qtyInStock, ProductSubCategory} =
    productInfo;

  const brand =
    ProductSubCategory?.BrandCategorySub?.BrandCategory?.Brand?.title ||
    'unknown';
  return (
    <div className="container py-10 px-24">
      <div className="my-5">
        <BreadCrumb />
      </div>
      <div className="grid grid-cols-[2fr_3fr] items-center  p-2">
        <div className="grid max-h-60vh">
          <ImageSlider images={productImages} />
        </div>
        {/* Title */}
        <div className="grid mx-10 items-center  text-cerulean-blue-800">
          <div>
            <h1 className="text-4xl  font-semibold ">{title}</h1>
            {/* Brand */}
            <p className=" text-lg ml-1 mt-2 ">{brand}</p>
          </div>
          {/* Price */}
          <div className="my-5 text-2xl  font-semibold ">
            <h1>
              <NumericFormat
                value={price}
                displayType="text"
                thousandSeparator=","
                suffix=" THB"
              />
            </h1>
          </div>
          {/*Description box*/}
          <div className="">
            <ProductDescription description={description} />
          </div>
          <div className="mt-5 py-4">
            <StockStatus qtyInStock={qtyInStock} />
          </div>
          {/* <button
            className="flex justify-center  font-bold text-sm bg-cerulean-blue-800 px-6 py-5 rounded-full text-white mt-5 hover:bg-stone-400"
            onClick={() => addCartItem(id)}
          >
            <div className="text-lg">Add to Cart</div>
          </button> */}
          {qtyInStock === 0 ? (
            <ActiveButton select={false} inActiveTitle="Out of Stock" />
          ) : (
            <ActiveButton
              select={true}
              onClick={() => addCartItem(id)}
              activeTitle="Add to Cart"
            />
          )}
        </div>
      </div>
      <div className="m-2 mt-10">
        <ProductSpecContainer productSpec={productSpec} />
      </div>
    </div>
  );
}
