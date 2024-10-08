import {useNavigate} from 'react-router-dom';
import {MdArrowRight} from 'react-icons/md';

import {NEW_PRODUCT} from '../../config/routing';

import HomeProductContainer from '../../components/ProductCard/home/HomeProductContainer';
import HomeCardError from './err/HomeCardError';

export default function HomeNewProduct({newProducts, error, loading}) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(NEW_PRODUCT);
    navigate(0);
  };
  return (
    <div className="py-10">
      <div className="flex flex-col justify-start">
        <h1 className="text-3xl text-indigo-700 font-semibold ">
          New Arrivals
        </h1>

        <button
          type="button"
          className="bg-white py-2 rounded-xl text-indigo-700 flex items-center hover:font-semibold"
          onClick={handleRedirect}
        >
          See more
          <span>
            <MdArrowRight />
          </span>
        </button>
      </div>

      {newProducts.length ? (
        <div className="grid lg:grid-cols-5 gap-5 py-5">
          {newProducts?.map((item) => (
            <HomeProductContainer
              key={item.id}
              product={item}
              loading={loading}
            />
          ))}
        </div>
      ) : (
        <HomeCardError />
      )}
    </div>
  );
}
