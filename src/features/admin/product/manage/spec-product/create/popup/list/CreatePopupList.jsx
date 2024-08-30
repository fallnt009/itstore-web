import CreatePopupListItem from './CreatePopupListItem';
export default function CreatePopupList({specDetail, selectedSpec}) {
  // console.log(specDetail);
  // console.log(selectedSpec);

  //fetchOnly item that Selected on Spec Main
  return (
    <div className="overflow-y-scroll scroll-smooth h-32">
      {specDetail
        ?.filter(
          (detail) =>
            detail.SpecProduct.specSubcategoryId ===
            selectedSpec.SpecSubcategory.id
        )
        .map((filtered) => (
          <CreatePopupListItem key={filtered.id} item={filtered.SpecProduct} />
        ))}
    </div>
  );
}
