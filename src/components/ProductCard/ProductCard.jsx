import ProductCardContent from './ProductCardContent';
import ProductCardErr from './ProductCardErr';
import ProductCardLoad from './ProductCardLoad';

export default function ProductCard({product, error, loading}) {
  if (!product || product.length === 0) {
    return <ProductCardErr />;
  }

  if (error) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return (
    <div className="container p-2">
      {loading ? <ProductCardLoad /> : <ProductCardContent product={product} />}
    </div>
  );
}
