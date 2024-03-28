import ProductCard from '../../components/ProductCard';

export default function HomeNewProduct() {
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
      <div className=" flex mt-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
