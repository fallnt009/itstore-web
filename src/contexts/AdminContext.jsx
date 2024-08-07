import {createContext, useCallback, useReducer} from 'react';
import * as AdminApi from '../apis/admin-api';

import adminReducer, {
  INTT_ADMIN,
  FETCH_SUBCATEGORY,
  FETCH_SPEC_ITEM,
  FETCH_BRAND,
  FETCH_BRAND_TAG,
  SET_ERROR,
  ADD_BRAND,
  ADD_CATEGORY,
  ADD_SUBCATEGORY,
  EDIT_BRAND,
  FETCH_CATEGORY,
  EDIT_CATEGORY,
  EDIT_SUBCATEGORY,
} from '../reducers/adminReducer';

const AdminContext = createContext();

export default function AdminContextProvider({children}) {
  const [AllAdmin, dispatch] = useReducer(adminReducer, INTT_ADMIN);

  //fetch category
  const fetchCategory = useCallback(async () => {
    try {
      const res = await AdminApi.getAllCategory();
      dispatch({
        type: FETCH_CATEGORY,
        payload: {category: res.data.result},
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  }, [dispatch]);

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
  const addBrand = async (data) => {
    try {
      const res = await AdminApi.createBrand(data);
      dispatch({
        type: ADD_BRAND,
        payload: {newBrands: res.data.result},
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
  //create main category
  const addCategory = async (data) => {
    try {
      const res = await AdminApi.createCategory(data);
      dispatch({
        type: ADD_CATEGORY,
        payload: {newCategory: res.data.result},
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
  //create subCategory
  const addSubCategory = async (data) => {
    try {
      const res = await AdminApi.createSubCategory(data);
      dispatch({
        type: ADD_SUBCATEGORY,
        payload: {newSubCategory: res.data.result},
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
  //create brand tag
  const addBrandTags = async (data) => {
    try {
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };

  //edit brand
  const editBrand = async (brandId, data) => {
    try {
      const res = await AdminApi.updateBrand(brandId, data);
      const updateBrand = res.data.result;
      dispatch({
        type: EDIT_BRAND,
        payload: {id: brandId, updatedBrand: updateBrand},
      });
      return updateBrand;
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
  //edit main category
  const editCategory = async (categoryId, data) => {
    try {
      const res = await AdminApi.updateCategory(categoryId, data);
      const updateCategory = res.data.result;
      dispatch({
        type: EDIT_CATEGORY,
        payload: {id: categoryId, updatedCategory: updateCategory},
      });
      return updateCategory;
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
  //edit subCategory
  const editSubCategory = async (subCategoryId, data) => {
    try {
      const res = await AdminApi.updateSubCategory(subCategoryId, data);
      const updateSubCategory = res.data.result;
      dispatch({
        type: EDIT_SUBCATEGORY,
        payload: {id: subCategoryId, updatedSubCategory: updateSubCategory},
      });
      return updateSubCategory;
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
  //edit brand tag

  return (
    <AdminContext.Provider
      value={{
        subCategory: AllAdmin.subCategory,
        specItems: AllAdmin.specItems,
        brands: AllAdmin.brands,
        brandTag: AllAdmin.brandTag,
        mainCategory: AllAdmin.mainCategory,
        fetchSubCategory,
        fetchSpecItem,
        fetchBrand,
        fetchCategory,
        fetchBrandTag,
        createProductImages,
        addBrand,
        addCategory,
        addSubCategory,
        editBrand,
        editCategory,
        editSubCategory,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export {AdminContext};
