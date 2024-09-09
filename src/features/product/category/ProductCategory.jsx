import {useParams} from 'react-router-dom';

import CategoryHeader from '../../category/CategoryHeader';
import CategoryFilter from '../../category/filter/CategoryFilter';
import CategoryProductItem from '../../category/CategoryProductItem';

export default function ProductCategory({product, loading, totalItems}) {
  const {categorySlug, subCategorySlug} = useParams();

  return (
    <div className="container">
      <div className="py-10 px-24">
        <CategoryHeader
          categorySlug={categorySlug}
          subCategorySlug={subCategorySlug}
          totalItems={totalItems}
        />
        <CategoryFilter />
        {totalItems === 0 ? (
          <div>
            Sorry! for Inconvenience. We have no product on this Section Right
            now!
          </div>
        ) : (
          <CategoryProductItem product={product} loading={loading} />
        )}
      </div>
    </div>
  );
}
