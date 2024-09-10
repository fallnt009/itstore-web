import ProductCardContent from './ProductCardContent';
import ProductCardLoad from './ProductCardLoad';

export default function ProductCard({product, error, loading}) {
  if (!product) {
    return <div>Error</div>;
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
