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
    <div className="container ">
      {loading ? <ProductCardLoad /> : <ProductCardContent product={product} />}
    </div>
  );
}
