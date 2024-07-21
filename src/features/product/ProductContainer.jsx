import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import useProduct from '../../hooks/useProduct';

import ProductDetail from '../product/ProductDetail';

export default function ProductContainer() {
  const {categoryName, subCategoryName, productName} = useParams();
  const {fetchProductInfo, productInfo, productSpec, setProductParams} =
    useProduct();

  useEffect(() => {
    setProductParams({categoryName, subCategoryName, productName});
    fetchProductInfo();
  }, [
    categoryName,
    subCategoryName,
    productName,
    setProductParams,
    fetchProductInfo,
  ]);

  return (
    <div>
      <ProductDetail productInfo={productInfo} productSpec={productSpec} />
    </div>
  );
}
