import {createContext, useReducer, useCallback} from 'react';

import * as ProductApi from '../apis/product-api';
import * as AdminApi from '../apis/admin-api';
import productReducer, {
  FETCH_HOME_PRODUCT,
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_INFO,
  INIT_PRODUCT,
  FETCH_PRODUCT_IMAGE,
  FETCH_SPEC_PRODUCT,
  FETCH_PRODUCT_PREVIEW,
  ADD_SPEC_DETAIL,
  DELETE_SPEC_DETAIL,
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
      specItems,
      specProduct,
      specDetail,
      productPreview,
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

  //fetch product preview //admin panel
  const fetchProductPreview = useCallback(
    async (productId) => {
      try {
        const productPreview = await ProductApi.getProductById(productId);

        const product = productPreview.data.result;
        const subCategoryId =
          product.ProductSubCategory.BrandCategorySub.subCategoryId;

        const [specItem, specDetail] = await Promise.all([
          ProductApi.getSpecBySubCategory(subCategoryId),
          ProductApi.getSpecDetail(productId),
        ]);

        dispatch({
          type: FETCH_PRODUCT_PREVIEW,
          payload: {
            productPreview: productPreview.data.result,
            specItems: specItem.data.result,
            specDetail: specDetail.data.result,
          },
        });
        // return res;
      } catch (err) {
        return err.response;
      }
    },
    [dispatch]
  );

  const fetchBrandTagByBcsId = useCallback(async (bcsId) => {
    try {
      const res = await AdminApi.getBrandTagByBcsId(bcsId);
      return res.data.result;
    } catch (err) {
      return err.response;
    }
  }, []);

  //add new product
  const addNewProduct = async (bcsId, data) => {
    try {
      //call api
      await ProductApi.createProduct(bcsId, data);
      // const newCreateProduct = response.data.result;
    } catch (err) {
      return err.response.data.descEn;
    }
  };
  //update product
  const updateProduct = async (productId, data) => {
    try {
      await ProductApi.updateProduct(productId, data);
    } catch (err) {
      return err.response.data.descEn;
    }
  };

  //fetchSpecItem by id
  const fetchSpecItemById = async (specId) => {
    try {
      const res = await ProductApi.getSpecItemById(specId);
      return res.data.result;
    } catch (err) {
      return err.response;
    }
  };

  //add spec items
  const createSpecItem = async (data) => {
    try {
      await ProductApi.createSpecItem(data);
    } catch (err) {
      return err.response.data.descEn;
    }
  };
  //update spec items
  const updateSpecItem = async (specId, data) => {
    try {
      await ProductApi.updateSpecItem(specId, data);
    } catch (err) {
      return err.response.data.descEn;
    }
  };

  //SPEC PRODUCT
  const fetchSpecProduct = useCallback(
    async (specItemId) => {
      try {
        const res = await AdminApi.getSpecProductByItemId(specItemId);
        dispatch({
          type: FETCH_SPEC_PRODUCT,
          payload: {specProduct: res.data.result},
        });
        return res;
      } catch (err) {
        return err.response;
      }
    },
    [dispatch]
  );

  const addSpecDetail = useCallback(
    async (specProductId, productId) => {
      //specProductId + productId
      //create
      //response
      try {
        const res = await ProductApi.createSubSpec(specProductId, productId);

        dispatch({
          type: ADD_SPEC_DETAIL,
          payload: {newSpecDetail: res.data.result},
        });
        return res;
      } catch (err) {
        return err.response;
      }
    },
    [dispatch]
  );
  const deleteSpecDetail = async (specDetailId, specProductId, productId) => {
    //delete
    //response
    try {
      await ProductApi.deleteSubSpec(specProductId, productId);
      dispatch({
        type: DELETE_SPEC_DETAIL,
        payload: {id: specDetailId},
      });
    } catch (err) {
      return err.response;
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productList,
        productInfo,
        productSpec,
        productImages,
        newProduct,
        salesProduct,
        specItems,
        specProduct,
        specDetail,
        productPreview,
        addNewProduct,
        updateProduct,
        fetchHomeProduct,
        fetchProductCategory,
        fetchProductInfo,
        fetchProductImage,
        fetchProductPreview,
        fetchBrandTagByBcsId,
        fetchSpecItemById,
        fetchSpecProduct,
        createSpecItem,
        updateSpecItem,
        addSpecDetail,
        deleteSpecDetail,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export {ProductContext};
