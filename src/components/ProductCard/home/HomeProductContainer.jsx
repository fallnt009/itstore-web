import HomeProductContent from './HomeProductContent';
import HomeProductError from './HomeProductError';
import HomeProductLoad from './HomeProductLoad';

export default function HomeProductContainer({product, error, loading}) {
  if (!product) {
    return <HomeProductError />;
  }
  if (error) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return (
    <div className="container">
      {loading ? <HomeProductLoad /> : <HomeProductContent product={product} />}
    </div>
  );
}
