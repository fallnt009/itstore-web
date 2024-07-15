import {createContext, useState, useEffect, useReducer} from 'react';

import * as ProductApi from '../apis/product-api';
import productReducer, {
  FETCH_HOME_PRODUCT,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_INFO,
  INIT_PRODUCT,
} from '../reducers/productReducer';

const ProductContext = createContext();

export default function ProductContextProvider({children}) {
  const [productParams, setProductParams] = useState({});

  const {categoryName, subCategoryName, productName} = productParams;

  const [
    {productList, newProduct, salesProduct, productInfo, productSpec, error},
    dispatch,
  ] = useReducer(productReducer, INIT_PRODUCT);

  //Fetch FOR HOME
  useEffect(() => {
    const fetchHomeProduct = async () => {
      try {
        const newProduct = await ProductApi.getNewProduct();
        const salesProduct = await ProductApi.getSalesProduct();
        dispatch({
          type: FETCH_HOME_PRODUCT,
          payload: {
            newProduct: newProduct.data.result,
            salesProduct: salesProduct.data.result,
          },
        });
      } catch (err) {
        dispatch({
          type: FETCH_PRODUCT_ERROR,
          payload: err.message,
        });
      }
    };
    fetchHomeProduct();
  }, []);

  //Fetch Product Info
  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const productInfoRes = await ProductApi.getProductInfo(
          categoryName,
          subCategoryName,
          productName
        );
        const productSpecRes = await ProductApi.getProductSpec(productName);

        // setProductSpec(productSpecRes.data.result);
        // setProductInfo(productInfoRes.data.result);
        dispatch({
          type: FETCH_PRODUCT_INFO,
          payload: {
            productInfo: productInfoRes.data.result,
            productSpec: productSpecRes.data.result,
          },
        });
      } catch (err) {
        dispatch({
          type: FETCH_PRODUCT_ERROR,
          payload: err.message,
        });
      }
    };
    fetchProductInfo();
  }, [categoryName, subCategoryName, productName]);

  //add new product
  //update product
  //delete product
  return (
    <ProductContext.Provider
      value={{
        productInfo,
        productSpec,
        newProduct,
        salesProduct,
        setProductParams,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export {ProductContext};
