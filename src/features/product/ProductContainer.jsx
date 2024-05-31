import {useEffect, useState} from 'react';
import ProductDetail from '../product/ProductDetail';
import {useParams} from 'react-router-dom';

import * as productApi from '../../apis/product-api';

export default function ProductContainer() {
  const {categoryName, subCategoryName, productName} = useParams();
  const [productInfo, setProductInfo] = useState([]);
  const [productSpec, setProductSpec] = useState([]);
  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const productInfoRes = await productApi.getProductInfo(
          categoryName,
          subCategoryName,
          productName
        );
        const productSpecRes = await productApi.getProductSpec(productName);

        setProductSpec(productSpecRes.data.result);
        setProductInfo(productInfoRes.data.result);
      } catch (err) {
        console.log('Error fetching', err);
      }
    };
    fetchProductInfo();
  }, [categoryName, subCategoryName, productName]);
  return (
    <div>
      <ProductDetail productInfo={productInfo} productSpec={productSpec} />
    </div>
  );
}
