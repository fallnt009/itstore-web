import ProductSpecification from './ProductSpecification';
import ProductDescription from './ProductDescription';

import ImageSlider from '../../components/ImageSlider';
import StockStatus from '../../components/StockStatus';
import BreadCrumb from '../../components/BreadCrumb';

import useCart from '../../hooks/useCart';

export default function ProductDetail({productInfo, productSpec}) {
  const {addCartItem} = useCart();
  //Check if product info is defined
  if (!productInfo) {
    return <div>No Product avaliable</div>;
  }

  const {id, title, price, description, qtyInStock, ProductSubCategory} =
    productInfo;

  const brand =
    ProductSubCategory?.BrandCategorySub?.BrandCategory?.Brand?.title ||
    'unknown';
  return (
    <div className="container p-4">
      <div className="my-5">
        <BreadCrumb />
      </div>
      <div className="grid grid-cols-[2fr_3fr] items-center  p-2">
        <div className="grid max-h-60vh">
          <ImageSlider />
          {/* <ProductImage src={productImage} size="400px" /> */}
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
            <h1>฿{price}</h1>
          </div>
          {/*Description box*/}
          <div className="">
            <ProductDescription description={description} />
          </div>
          <div className="mt-5 border-2 rounded-lg p-4">
            <StockStatus qtyInStock={qtyInStock} />
          </div>
          <button
            className="flex justify-center  font-bold text-sm bg-cerulean-blue-800 px-6 py-5 rounded-full text-white mt-5 hover:bg-stone-400"
            onClick={() => addCartItem(id)}
          >
            <div className="text-lg">Add to Cart</div>
          </button>
        </div>
      </div>
      <div className="m-2 mt-10">
        <div>
          <h1 className="text-4xl text-cerulean-blue-800 font-semibold ">
            Specification
          </h1>
        </div>
        {/* Model */}
        <div>
          <ProductSpecification productSpec={productSpec} />
        </div>
      </div>
    </div>
  );
}
