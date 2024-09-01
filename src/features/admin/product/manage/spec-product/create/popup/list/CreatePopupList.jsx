import useProduct from '../../../../../../../../hooks/useProduct';

import CreatePopupListItem from './CreatePopupListItem';

export default function CreatePopupList({selectedSpec, product}) {
  const {specDetail} = useProduct();

  return (
    <div className="overflow-y-scroll scroll-smooth h-32">
      {specDetail
        ?.filter(
          (detail) =>
            detail.SpecProduct.specSubcategoryId ===
            selectedSpec.SpecSubcategory.id
        )
        .map((filtered) => (
          <CreatePopupListItem
            key={filtered.id}
            item={filtered.SpecProduct}
            specDetailId={filtered.id}
            productId={product.id}
          />
        ))}
    </div>
  );
}
