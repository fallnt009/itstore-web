import ProductSpecification from './ProductSpecification';
import ProductDescription from './ProductDescription';
import ProductQuantity from './ProductQuantity';

import ProductImage from '../../components/ProductPic';

export default function ProductDetail({productInfo, productSpec}) {
  //Check if product info is defined
  if (!productInfo) {
    return <div>No Product avaliable</div>;
  }

  const {title, price, qtyInStock, productImage, ProductSubCategory} =
    productInfo;
  const brand =
    ProductSubCategory?.BrandCategorySub?.BrandCategory?.Brand?.title ||
    'unknown';
  return (
    <div className="container mx-5 mt-10">
      <div className="my-5">
        <p>Home / Components / Mainboard / AM4 /ASROCK B450M STEEL LEGEND</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="items-center">
          <ProductImage src={productImage} size="400px" />
        </div>
        {/* Title */}
        <div className="items-center">
          <div>
            <h1 className="text-4xl text-cerulean-blue-800 font-semibold ">
              {title}
            </h1>
            {/* Brand */}
            <p className=" text-lg ml-1 mt-2 text-cerulean-blue-800">{brand}</p>
          </div>
          {/* Price */}
          <div className="my-5 text-2xl text-cerulean-blue-800 font-semibold ">
            <h1>฿{price}</h1>
          </div>
          {/*Description box*/}
          <div className="my-5 text-cerulean-blue-800">
            <ProductDescription />
          </div>
          {/* Checkout Box */}
          <div className="flex gap-6 my-10 text-cerulean-blue-800">
            <ProductQuantity qty={qtyInStock} />
          </div>
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
