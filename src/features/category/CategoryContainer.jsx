import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import ProductCategory from '../product/ProductCategory';

import useProduct from '../../hooks/useProduct';

export default function CategoryContainer() {
  const {categoryName, subCategoryName} = useParams();
  const {productList, fetchProductCategory} = useProduct();

  useEffect(() => {
    fetchProductCategory(categoryName, subCategoryName);
  }, [categoryName, subCategoryName, fetchProductCategory]);

  return (
    <div>
      <ProductCategory
        subCategoryName={subCategoryName}
        product={productList}
      />
    </div>
  );
}
