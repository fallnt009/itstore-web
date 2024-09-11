import {useState, useEffect, useCallback} from 'react';
import {useParams} from 'react-router-dom';

import ProductCategory from '../product/category/ProductCategory';
import ParginationButton from '../../components/ParginationButton';

import useCategory from '../../hooks/useCategory';

export default function CategoryContainer() {
  const {categorySlug, subCategorySlug} = useParams();
  const {categoryItem, totalItems, totalPages, fetchCategoryItem} =
    useCategory();

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  //Selected
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);

  const loadCategory = useCallback(async () => {
    setLoading(true);
    try {
      //
      await fetchCategoryItem(
        categorySlug,
        subCategorySlug,
        page,
        12,
        search,
        filters
      );
    } catch (err) {
      setLoading(false);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [categorySlug, subCategorySlug, fetchCategoryItem, page, search, filters]);

  useEffect(() => {
    loadCategory();
  }, [loadCategory]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleOnSelectFilter = (item, isChecked) => {
    setFilters((prevFilter) => {
      if (isChecked) {
        //pack
        if (!prevFilter.includes(item)) {
          return [...prevFilter, item];
        }
      } else {
        //removing one by one
        return prevFilter.filter((filter) => filter !== item);
      }

      return prevFilter;
    });
  };

  const handleClearAllFilter = () => {
    setFilters([]);
  };

  return (
    <div>
      <ProductCategory
        product={categoryItem}
        totalItems={totalItems}
        loading={loading}
        filters={filters}
        onSelect={handleOnSelectFilter}
        onClear={handleClearAllFilter}
      />
      <div className="flex justify-center gap-2 py-3">
        <ParginationButton
          page={page}
          totalPages={totalPages}
          handleChange={handleChangePage}
        />
      </div>
    </div>
  );
}
