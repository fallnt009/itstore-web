import {Link} from 'react-router-dom';

import {IoMdHeartEmpty} from 'react-icons/io';

import ProductPic from '../ProductPic';
import ProductCardInfo from './ProductCardInfo';

import useCart from '../../hooks/useCart';

export default function ProductCardContent({product}) {
  const {addCartItem} = useCart();

  const {
    id,
    title,
    price,
    qtyInStock,
    ProductSubCategory,
    ProductDiscount,
    ProductImages,
    slug,
  } = product;

  const subCategoryName = (
    ProductSubCategory?.BrandCategorySub?.SubCategory?.title || 'unknown'
  ).toLowerCase();
  const categoryName = (
    ProductSubCategory?.BrandCategorySub?.BrandCategory?.MainCategory?.title ||
    'unknown'
  ).toLowerCase();

  const productImages = ProductImages[0]?.path;

  return (
    <div className="text-sm border p-2">
      <Link
        className="flex flex-col justify-center"
        to={`/categories/${categoryName}/${subCategoryName}/${slug}`}
      >
        <div className="flex justify-center">
          <ProductPic size="250px" src={productImages} />
        </div>
        {/* Productbox */}
        <div className="px-2">
          <ProductCardInfo
            title={title}
            subCategoryName={subCategoryName}
            price={price}
            discount={ProductDiscount?.Discount}
          />
        </div>
      </Link>
      <div className="flex items-center gap-3 px-2 pt-3 pb-10">
        {/* Add to Cart */}
        {qtyInStock === 0 ? (
          <div className="rounded-lg p-2 border border-gray-400 bg-gray-400 text-white font-semibold ">
            Add to Cart
          </div>
        ) : (
          <button
            type="button"
            className="rounded-lg p-2 border border-indigo-600 bg-indigo-600 text-white font-semibold hover:text-indigo-600 hover:bg-white"
            onClick={() => addCartItem(id)}
          >
            Add to Cart
          </button>
        )}
        {/* Add Wishlist */}
        <button
          className="rounded-full p-2 hover:bg-indigo-600 hover:text-white text-indigo-600"
          type="button"
        >
          <IoMdHeartEmpty size={25} />
        </button>
      </div>
    </div>
  );
}
