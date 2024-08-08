import {createContext, useCallback, useReducer} from 'react';
import * as AdminApi from '../apis/admin-api';

import adminReducer, {
  INTT_ADMIN,
  FETCH_SUBCATEGORY,
  FETCH_SPEC_ITEM,
  FETCH_BRAND,
  FETCH_BRAND_TAG,
  SET_ERROR,
} from '../reducers/adminReducer';

const AdminContext = createContext();

export default function AdminContextProvider({children}) {
  const [AllAdmin, dispatch] = useReducer(adminReducer, INTT_ADMIN);

  //fetch category

  //fetch subCategory
  const fetchSubCategory = useCallback(async () => {
    try {
      const res = await AdminApi.getSubCategory();
      dispatch({
        type: FETCH_SUBCATEGORY,
        payload: {subCategory: res.data.result},
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  }, [dispatch]);
  //fetch specItem of that category
  const fetchSpecItem = useCallback(
    async (subCategoryName) => {
      try {
        const res = await AdminApi.getSpecByCategory(subCategoryName);
        dispatch({
          type: FETCH_SPEC_ITEM,
          payload: {specItems: res.data.result},
        });
      } catch (err) {
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      }
    },
    [dispatch]
  );

  //fetch Brand
  const fetchBrand = useCallback(async () => {
    try {
      const res = await AdminApi.getAllBrand();
      dispatch({
        type: FETCH_BRAND,
        payload: {brands: res.data.result},
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  }, [dispatch]);
  // fetch BC from brand Id

  const fetchBrandTag = useCallback(
    async (brandId) => {
      try {
        const res = await AdminApi.getBrandTag(brandId);
        dispatch({
          type: FETCH_BRAND_TAG,
          payload: {brandTag: res.data.result},
        });
      } catch (err) {
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      }
    },
    [dispatch]
  );

  const createProductImages = async (productId, formData) => {
    try {
      await AdminApi.createProductImages(productId, formData);
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };

  //create brand
  //create main category
  //create subCategory
  //create brand tag

  //edit brand
  //edit main category
  //edit subCategory
  //edit brand tag

  return (
    <AdminContext.Provider
      value={{
        subCategory: AllAdmin.subCategory,
        specItems: AllAdmin.specItems,
        brands: AllAdmin.brands,
        brandTag: AllAdmin.brandTag,
        fetchSubCategory,
        fetchSpecItem,
        fetchBrand,
        fetchBrandTag,
        createProductImages,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export {AdminContext};
