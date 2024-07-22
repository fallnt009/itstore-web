import {createContext, useReducer, useCallback} from 'react';

import * as ProductApi from '../apis/product-api';
import productReducer, {
  FETCH_HOME_PRODUCT,
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_INFO,
  INIT_PRODUCT,
} from '../reducers/productReducer';

const ProductContext = createContext();

export default function ProductContextProvider({children}) {
  const [
    {productList, newProduct, salesProduct, productInfo, productSpec, error},
    dispatch,
  ] = useReducer(productReducer, INIT_PRODUCT);

  //Fetch for homepage

  const fetchHomeProduct = useCallback(async () => {
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
  }, []);

  //Fetch By Category

  const fetchProductCategory = useCallback(
    async (categoryName, subCategoryName, page, pageSize) => {
      try {
        const productList = await ProductApi.getProductByCategory(
          categoryName,
          subCategoryName,
          {params: {page, pageSize}}
        );

        dispatch({
          type: FETCH_PRODUCT_LIST,
          payload: {
            productList: productList.data.result,
          },
        });
      } catch (err) {
        dispatch({
          type: FETCH_PRODUCT_ERROR,
          payload: err.message,
        });
      }
    },
    [dispatch]
  );

  //Fetch Product Info

  const fetchProductInfo = useCallback(
    async (categoryName, subCategoryName, productName) => {
      try {
        const productInfoRes = await ProductApi.getProductInfo(
          categoryName,
          subCategoryName,
          productName
        );
        const productSpecRes = await ProductApi.getProductSpec(productName);

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
    },
    []
  );

  //add new product
  //update product
  //delete product
  return (
    <ProductContext.Provider
      value={{
        productList,
        productInfo,
        productSpec,
        newProduct,
        salesProduct,
        fetchHomeProduct,
        fetchProductCategory,
        fetchProductInfo,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export {ProductContext};
