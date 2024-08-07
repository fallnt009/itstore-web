import {createContext, useReducer, useCallback} from 'react';

import * as ProductApi from '../apis/product-api';
import productReducer, {
  FETCH_HOME_PRODUCT,
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_INFO,
  INIT_PRODUCT,
  FETCH_PRODUCT_IMAGE,
} from '../reducers/productReducer';

const ProductContext = createContext();

export default function ProductContextProvider({children}) {
  const [
    {
      productList,
      newProduct,
      salesProduct,
      productInfo,
      productSpec,
      productImages,
      error,
    },
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
  }, [dispatch]);

  //Fetch By Category

  const fetchProductCategory = useCallback(
    async (categoryName, subCategoryName, page, pageSize) => {
      try {
        const productList = await ProductApi.getProductByCategory(
          categoryName,
          subCategoryName,
          page,
          pageSize
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
    [dispatch]
  );
  //fetch productImage
  const fetchProductImage = useCallback(
    async (productName) => {
      try {
        const productImageRes = await ProductApi.getProductInfoImage(
          productName
        );
        const images = productImageRes.data.result.ProductImages;
        dispatch({
          type: FETCH_PRODUCT_IMAGE,
          payload: {productImages: images},
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

  //add new product
  const addNewProduct = async (bcsId, data) => {
    try {
      //call api
      const response = await ProductApi.createProduct(bcsId, data);
      const newCreateProduct = response.data.result;
      return newCreateProduct;
    } catch (err) {
      dispatch({
        type: FETCH_PRODUCT_ERROR,
        payload: err.message,
      });
    }
  };
  //update product
  //delete product
  return (
    <ProductContext.Provider
      value={{
        productList,
        productInfo,
        productSpec,
        productImages,
        newProduct,
        salesProduct,
        addNewProduct,
        fetchHomeProduct,
        fetchProductCategory,
        fetchProductInfo,
        fetchProductImage,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export {ProductContext};
