export default function ProductSpecification({productSpec}) {
  const {ProductSubSpecs} = productSpec;

  return (
    <>
      {ProductSubSpecs?.map((specProd) => {
        const specTitle = specProd.SpecProduct.SpecSubcategory.SpecItem.title;
        const specValue = specProd.SpecProduct.value;
        const specText = specProd.SpecProduct.text;
        return (
          <div
            key={specProd.id}
            className="flex flex-col gap-1 m-5 text-cerulean-blue-800"
          >
            <div className="font-semibold">{specTitle}</div>
            <div className="flex">
              {specValue}
              {specText}
            </div>
          </div>
        );
      })}
    </>
  );
}
