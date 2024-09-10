import ProductCard from '../../components/ProductCard/ProductCard';

export default function CategoryProductItem({product, loading}) {
  //limit 4

  return (
    <div className="grid grid-cols-4 pt-5 px-5">
      {product.map((el) => (
        <ProductCard key={el.id} product={el} loading={loading} />
      ))}
    </div>
  );
}
