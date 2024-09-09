import {createContext, useReducer, useCallback} from 'react';

import * as ProductApi from '../apis/product-api';
import * as AdminApi from '../apis/admin-api';
import productReducer, {
  FETCH_HOME_PRODUCT,
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_INFO,
  INIT_PRODUCT,
  FETCH_SPEC_PRODUCT,
  FETCH_PRODUCT_PREVIEW,
  ADD_SPEC_DETAIL,
  DELETE_SPEC_DETAIL,
  FETCH_PRODUCT_SINGLE,
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
      product,
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
    async (categorySlug, subCategorySlug, page, pageSize) => {
      try {
        const productList = await ProductApi.getProductByCategory(
          categorySlug,
          subCategorySlug,
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
    async (categorySlug, subCategorySlug, productSlug) => {
      try {
        const productInfoRes = await ProductApi.getProductInfo(
          categorySlug,
          subCategorySlug,
          productSlug
        );

        const productInfoData = productInfoRes.data.result;
        const subCategoryId =
          productInfoData.ProductSubCategory.BrandCategorySub.subCategoryId;
        const productId = productInfoData.id;

        const [specItem, specDetail] = await Promise.all([
          ProductApi.getSpecBySubCategory(subCategoryId),
          ProductApi.getSpecDetailPublic(productId),
        ]);

        console.log(productInfoData);

        dispatch({
          type: FETCH_PRODUCT_INFO,
          payload: {
            productInfo: productInfoData,
            productImages: productInfoData.ProductImages,
            specItems: specItem.data.result,
            specDetail: specDetail.data.result,
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

  const fetchProductById = useCallback(
    async (id) => {
      try {
        const res = await ProductApi.getProductById(id);
        dispatch({
          type: FETCH_PRODUCT_SINGLE,
          payload: {product: res.data.result},
        });
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
      //fetch for edit
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
        const res = await ProductApi.getSpecProductByItemId(specItemId);
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

  //SUB SPEC
  const addSpecDetail = useCallback(
    async (productId, data) => {
      try {
        const res = await ProductApi.createSubSpec(productId, data);

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
        product,
        addNewProduct,
        updateProduct,
        fetchHomeProduct,
        fetchProductCategory,
        fetchProductInfo,
        fetchProductPreview,
        fetchBrandTagByBcsId,
        fetchSpecItemById,
        fetchSpecProduct,
        fetchProductById,
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
