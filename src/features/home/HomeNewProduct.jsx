import ProductCard from '../../components/ProductCard';

export default function HomeNewProduct({newProducts}) {
  return (
    <div className="mx-5 mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl text-cerulean-blue-800 font-semibold ">
          New Product
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
      <div className="grid grid-cols-4 mt-10">
        {newProducts.map((el) => (
          <ProductCard key={el.id} product={el} />
        ))}
      </div>
    </div>
  );
}
