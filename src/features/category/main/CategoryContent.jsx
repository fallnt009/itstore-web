import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import CategoryHeader from '../header/CategoryHeader';
import CategoryProductItem from './items/CategoryProductItem';
import categoryFilter from '../utils/CategoryFilter';
import ActiveFilterContent from '../filter/filterbar/ActiveFilterContent';
import SidebarFilter from '../filter/sidebar/SidebarFilter';

import useProduct from '../../../hooks/useProduct';

export default function CategoryContent({
  product,
  loading,
  totalItems,
  onSubmit,
  setFilters,
  setSearch,
}) {
  const {categorySlug, subCategorySlug} = useParams();
  const {specItems, specProduct, fetchProductFilter} = useProduct();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const titles = categoryFilter(subCategorySlug);
        //call fetch
        await fetchProductFilter(subCategorySlug, titles);
      } catch (err) {
        //err
      }
    };
    fetchData();
  }, [fetchProductFilter, subCategorySlug]);

  return (
    <div className="container">
      <div className="px-10">
        <CategoryHeader
          categorySlug={categorySlug}
          subCategorySlug={subCategorySlug}
          totalItems={totalItems}
        />
        <ActiveFilterContent />
        <div className="grid grid-cols-[1fr_5fr]">
          <div>
            <SidebarFilter
              specItems={specItems}
              specProduct={specProduct}
              onSubmit={onSubmit}
              setFilters={setFilters}
              setSearch={setSearch}
            />
          </div>
          <div>
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
