import {useState, useEffect, useCallback} from 'react';
import {useParams} from 'react-router-dom';

import ProductCategory from '../product/ProductCategory';
import ParginationButton from '../../components/ParginationButton';

import useCategory from '../../hooks/useCategory';

export default function CategoryContainer() {
  const {categoryName, subCategoryName} = useParams();
  const {
    categoryItem,
    totalItems,
    totalPages,
    currentPage,
    error,
    fetchCategoryItem,
  } = useCategory();

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadCategory = useCallback(async () => {
    setLoading(true);
    try {
      await fetchCategoryItem(categoryName, subCategoryName, page, 8);
    } catch (err) {
      setLoading(false);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [categoryName, subCategoryName, fetchCategoryItem, page]);

  useEffect(() => {
    loadCategory();
  }, [loadCategory]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <ProductCategory
        subCategoryName={subCategoryName}
        product={categoryItem}
        totalItems={totalItems}
        loading={loading}
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
