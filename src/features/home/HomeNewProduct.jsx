import {useNavigate} from 'react-router-dom';
import {NEW_PRODUCT} from '../../config/routing';

import ProductCard from '../../components/ProductCard/ProductCard';

export default function HomeNewProduct({newProducts, error}) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(NEW_PRODUCT);
    navigate(0);
  };
  return (
    <div className="mx-5 ">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl text-cerulean-blue-800 font-semibold ">
          New Product
        </h1>

        <button
          type="button"
          className="bg-white px-3 py-2 rounded-xl text-cerulean-blue-800 font-semibold border-2 hover:border-cerulean-blue-800"
          onClick={handleRedirect}
        >
          View All
        </button>
      </div>
      {/* Product Card */}
      {error ? (
        <div className="flex justify-center py-24 border-t-2"> {error}</div>
      ) : (
        <div className="grid grid-cols-4 py-5">
          {newProducts?.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
