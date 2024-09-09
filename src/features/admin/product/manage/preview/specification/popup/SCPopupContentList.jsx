import useProduct from '../../../../../../../hooks/useProduct';

import SCPopupContentListItem from './SCPopupContentListItem';

export default function SCPopupContentList({selectedSpec, product}) {
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
          <SCPopupContentListItem
            key={filtered.id}
            item={filtered}
            specDetailId={filtered.id}
            productId={product.id}
          />
        ))}
    </div>
  );
}
