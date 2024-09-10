import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import CategoryHeader from '../../category/CategoryHeader';
import CategoryProductItem from '../../category/CategoryProductItem';

import ActiveFilterContent from '../../category/filter/filterbar/ActiveFilterContent';
import SidebarFilter from '../../category/filter/sidebar/SidebarFilter';

import useProduct from '../../../hooks/useProduct';

export default function ProductCategory({product, loading, totalItems}) {
  const {categorySlug, subCategorySlug} = useParams();
  const {specItems, specProduct, fetchProductFilter} = useProduct();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchProductFilter(subCategorySlug);
      } catch (err) {
        //err
      }
    };
    fetchData();
  }, [fetchProductFilter, subCategorySlug]);

  return (
    <div className="container">
      <div className="py-10 px-5">
        <CategoryHeader
          categorySlug={categorySlug}
          subCategorySlug={subCategorySlug}
          totalItems={totalItems}
        />
        <div className="grid grid-cols-[1fr_5fr]">
          <div>
            <SidebarFilter specItems={specItems} specProduct={specProduct} />
          </div>
          <div>
            <ActiveFilterContent />
            {totalItems === 0 ? (
              <div>
                Sorry! for Inconvenience. We have no product on this Section
                Right now!
              </div>
            ) : (
              <CategoryProductItem product={product} loading={loading} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
