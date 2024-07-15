import ProductCard from '../../components/ProductCard/ProductCard';

export default function HomeNewProduct({newProducts, error}) {
  return (
    <div className="mx-5 ">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl text-cerulean-blue-800 font-semibold ">
          New Product
        </h1>
        <button
          type="button"
          className="bg-cerulean-blue-800 p-2 rounded-xl text-white "
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
