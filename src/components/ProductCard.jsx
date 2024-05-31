import {Link} from 'react-router-dom';

import {IoMdHeartEmpty} from 'react-icons/io';
import {FaCartArrowDown} from 'react-icons/fa';

import ProductPic from './ProductPic';

export default function ProductCard({product}) {
  if (!product) {
    return <div>No Data</div>;
  }

  const {title, description, price, productImage, ProductSubCategory} = product;

  const subCategoryName =
    ProductSubCategory?.BrandCategorySub?.SubCategory?.title || 'unknown';
  const categoryName =
    ProductSubCategory?.BrandCategorySub?.BrandCategory?.MainCategory?.title ||
    'unknown';
  console.log(ProductSubCategory);

  return (
    <div className="container border-t-4 py-16">
      <div className="grid mx-7 h-full border">
        <Link
          to={`/categories/product/${categoryName}/${subCategoryName}/${title}`}
        >
          <div className="flex justify-center">
            <ProductPic size="250px" src={productImage} />
          </div>
          {/* Productbox */}
          <div className=" grid text-cerulean-blue-800 mt-5 w-full">
            <div className="flex flex-col items-start gap-3">
              <h3 className="font-bold">{title}</h3>
              <p className=" font-regular text-sm">{subCategoryName}</p>
              {/* Price  */}
              <div className=" font-bold text-2xl ">{price} THB</div>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-5 mt-5">
          {/* Add to Cart */}
          <button
            type="button"
            className="rounded-full p-2 bg-cerulean-blue-800"
          >
            <FaCartArrowDown size={25} color="white" />
          </button>
          {/* Add Wishlist */}
          <button type="button">
            <IoMdHeartEmpty size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}
