import {useParams} from 'react-router-dom';

import CategoryHeader from '../category/CategoryHeader';
import CategoryFilter from '../category/CategoryFilter';
import CategoryProductItem from '../category/CategoryProductItem';

export default function ProductCategory({product, loading, totalItems}) {
  const {categoryName, subCategoryName} = useParams();

  return (
    <div className="container">
      <div className="py-10 px-24">
        <CategoryHeader
          categoryName={categoryName}
          subCategoryName={subCategoryName}
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
