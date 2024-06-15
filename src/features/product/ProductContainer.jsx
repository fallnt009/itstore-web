import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import useProduct from '../../hooks/useProduct';

import ProductDetail from '../product/ProductDetail';

export default function ProductContainer() {
  const {categoryName, subCategoryName, productName} = useParams();
  const {productInfo, productSpec, setProductParams} = useProduct();
  useEffect(() => {
    setProductParams({categoryName, subCategoryName, productName});
  }, [categoryName, subCategoryName, productName, setProductParams]);

  return (
    <div>
      <ProductDetail productInfo={productInfo} productSpec={productSpec} />
    </div>
  );
}
