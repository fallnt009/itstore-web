import {createContext, useState, useEffect} from 'react';

import * as ProductApi from '../apis/product-api';

const ProductContext = createContext();

export default function ProductContextProvider({children}) {
  const [productParams, setProductParams] = useState({});
  const [productInfo, setProductInfo] = useState([]);
  const [productSpec, setProductSpec] = useState([]);

  const {categoryName, subCategoryName, productName} = productParams;

  //fetch product
  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const productInfoRes = await ProductApi.getProductInfo(
          categoryName,
          subCategoryName,
          productName
        );
        const productSpecRes = await ProductApi.getProductSpec(productName);

        setProductSpec(productSpecRes.data.result);
        setProductInfo(productInfoRes.data.result);
      } catch (err) {
        console.log('Error fetching', err);
      }
    };
    fetchProductInfo();
  }, [categoryName, subCategoryName, productName]);

  //add new product
  //update product
  //delete product
  return (
    <ProductContext.Provider
      value={{productInfo, productSpec, setProductParams}}
    >
      {children}
    </ProductContext.Provider>
  );
}

export {ProductContext};
