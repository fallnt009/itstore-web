import ProductCard from '../../../../components/ProductCard/ProductCard';

import CategoryNotFound from '../../utils/CategoryNotFound';

export default function CategoryProductItem({product, loading}) {
  if (product.length === 0) {
    return <CategoryNotFound />;
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 pt-5 px-5">
      {product.map((el) => (
        <ProductCard key={el.id} product={el} loading={loading} />
      ))}
    </div>
  );
}
