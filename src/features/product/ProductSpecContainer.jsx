import ProductSpecification from './ProductSpecification';
export default function ProductSpecContainer({productSpec}) {
  return (
    <>
      <div>
        <h1 className="text-4xl text-cerulean-blue-800 font-semibold ">
          Specification
        </h1>
      </div>
      <div>
        {productSpec ? (
          <ProductSpecification productSpec={productSpec} />
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
