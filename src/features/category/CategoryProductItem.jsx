import ProductCard from '../../components/ProductCard/ProductCard';

import CategoryNotFound from './CategoryNotFound';

export default function CategoryProductItem({product, loading}) {
  if (product.length === 0) {
    return <CategoryNotFound />;
  }

  return (
    <div className="grid grid-cols-4 pt-5 px-5">
      {product.map((el) => (
        <ProductCard key={el.id} product={el} loading={loading} />
      ))}
    </div>
  );
}
