import ProductCard from '../../components/ProductCard/ProductCard';

export default function HomeFlashSale({error, salesProduct}) {
  return (
    <div className="mx-5 mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl text-cerulean-blue-800 font-semibold ">
          Flash Sale
        </h1>
        <div>
          <button
            type="button"
            className="bg-cerulean-blue-800 p-2 rounded-xl text-white "
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
