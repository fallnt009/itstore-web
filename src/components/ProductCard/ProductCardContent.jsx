import {Link} from 'react-router-dom';

import {IoMdHeartEmpty} from 'react-icons/io';
import {FaCartArrowDown} from 'react-icons/fa';

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
    <div className="grid px-2 py-3 ">
      <Link
        className="flex flex-col justify-center"
        to={`/categories/${categoryName}/${subCategoryName}/${title}`}
      >
        <div className="block">
          <ProductPic size="250px" src={productImages} />
        </div>
        {/* Productbox */}
        <ProductCardInfo
          title={title}
          subCategoryName={subCategoryName}
          price={price}
          discount={ProductDiscount?.Discount}
        />
      </Link>
      <div className="flex items-center gap-3 py-5">
        {/* Add to Cart */}
        {qtyInStock === 0 ? (
          <div className="rounded-full p-2 bg-stone-400">
            <FaCartArrowDown size={25} color="white" />
          </div>
        ) : (
          <button
            type="button"
            className="rounded-full p-2 bg-cerulean-blue-800 hover:bg-stone-400"
            onClick={() => addCartItem(id)}
          >
            <FaCartArrowDown size={25} color="white" />
          </button>
        )}
        {/* Add Wishlist */}
        <button
          className="rounded-full p-2 hover:bg-stone-400 text-cerulean-blue-800"
          type="button"
        >
          <IoMdHeartEmpty size={25} />
        </button>
      </div>
    </div>
  );
}
