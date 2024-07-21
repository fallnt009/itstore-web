import {useNavigate} from 'react-router-dom';
import {SALE_PRODUCT} from '../../config/routing';

import ProductCard from '../../components/ProductCard/ProductCard';

export default function HomeFlashSale({error, salesProduct}) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(SALE_PRODUCT);
    navigate(0);
  };
  return (
    <div className="mx-5 mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl text-cerulean-blue-800 font-semibold ">
          Flash Sale
        </h1>
        <div>
          <button
            type="button"
            className="bg-white px-3 py-2 rounded-xl text-cerulean-blue-800 font-semibold border-2 hover:border-cerulean-blue-800"
            onClick={handleRedirect}
          >
            View All
          </button>
        </div>
      </div>
      {/* Product Card */}
      {error ? (
        <div className="flex justify-center py-24"> {error}</div>
      ) : (
        <div className=" grid grid-cols-4 py-5">
          {salesProduct?.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
