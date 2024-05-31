export default function ProductSpecification({productSpec}) {
  return (
    <>
      {productSpec.map((el) => {
        return (
          <div
            key={el.id}
            className="flex flex-col gap-1 m-5 text-cerulean-blue-800"
          >
            <div className="font-semibold"> {el.SpecItem.specName}</div>
            <div className="flex">{el.description}</div>
          </div>
        );
      })}
    </>
  );
}
