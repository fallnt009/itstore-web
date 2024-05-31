import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import ProductCategory from '../product/ProductCategory';

import * as productApi from '../../apis/product-api';

export default function CategoryContainer() {
  const {categoryName, subCategoryName} = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productApi.getProductByCategory(
          categoryName,
          subCategoryName
        );

        setProduct(res.data.result);
      } catch (err) {
        console.log('Error fetching', err);
      }
    };
    fetchProduct();
  }, [categoryName, subCategoryName]);

  return (
    <div>
      <ProductCategory subCategoryName={subCategoryName} product={product} />
    </div>
  );
}
