import {useParams} from 'react-router-dom';

import CategoryHeader from '../category/CategoryHeader';
import CategoryFilter from '../category/CategoryFilter';
import CategoryProductItem from '../category/CategoryProductItem';
import CategoryScrollLoad from '../category/CategoryScrollLoad';

export default function ProductCategory({product, loading, hasMore}) {
  const {categoryName, subCategoryName} = useParams();

  return (
    <div className="container">
      <div className="py-10 px-24">
        <CategoryHeader
          categoryName={categoryName}
          subCategoryName={subCategoryName}
        />
        <CategoryFilter />
        <CategoryProductItem product={product} loading={loading} />
        {hasMore && <CategoryScrollLoad />}
        {!hasMore && <p>No more to Load.</p>}
      </div>
    </div>
  );
}
