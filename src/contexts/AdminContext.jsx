import {createContext, useCallback, useReducer} from 'react';
import * as AdminApi from '../apis/admin-api';

import adminReducer, {
  INTT_ADMIN,
  FETCH_SUBCATEGORY,
  FETCH_SPEC_ITEM,
  FETCH_BRAND,
  FETCH_BRAND_TAG,
  ADD_BRAND,
  ADD_CATEGORY,
  ADD_SUBCATEGORY,
  EDIT_BRAND,
  FETCH_CATEGORY,
  EDIT_CATEGORY,
  EDIT_SUBCATEGORY,
  ADD_BRANDTAG,
  FETCH_PRODUCT,
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
      return err.response.data.descEn;
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
      return err.response.data.descEn;
    }
  }, [dispatch]);
  //fetch specItem of that category
  const fetchSpecItem = useCallback(
    async (subCategoryId) => {
      try {
        const res = await AdminApi.getSpecByCategory(subCategoryId);
        dispatch({
          type: FETCH_SPEC_ITEM,
          payload: {specItems: res.data.result},
        });
      } catch (err) {
        return err.response.data.descEn;
      }
    },
    [dispatch]
  );

  const fetchAllSpecItem = useCallback(
    async (page, limit, order) => {
      try {
        const res = await AdminApi.getAllSpecItems(page, limit, order);
        dispatch({
          type: FETCH_SPEC_ITEM,
          payload: {specItems: res.data.result},
        });
        return res.data.totalPages;
      } catch (err) {
        return err.response.data.descEn;
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
      return err.response.data.descEn;
    }
  }, [dispatch]);

  const fetchBrandTag = useCallback(
    async (brandId) => {
      try {
        const res = await AdminApi.getBrandTag(brandId);
        dispatch({
          type: FETCH_BRAND_TAG,
          payload: {brandTag: res.data.result},
        });
      } catch (err) {
        return err.response.data.descEn;
      }
    },
    [dispatch]
  );

  const fetchAllProduct = useCallback(
    async (page, limit, order, brandId, subCategoryId) => {
      try {
        const res = await AdminApi.getAllProduct(
          page,
          limit,
          order,
          brandId,
          subCategoryId
        );
        dispatch({
          type: FETCH_PRODUCT,
          payload: {products: res.data.result},
        });
        return res.data.totalPages;
      } catch (err) {
        return err.response.data.descEn;
      }
    },
    [dispatch]
  );

  const createProductImages = async (productId, formData) => {
    try {
      await AdminApi.createProductImages(productId, formData);
    } catch (err) {
      return err.response.data.descEn;
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
      return err.response.data.descEn;
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
      return err.response.data.descEn;
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
      return err.response.data.descEn;
    }
  };
  //create brand tag
  const addBrandTags = async (data) => {
    try {
      const res = await AdminApi.createBrandTag(data);
      dispatch({
        type: ADD_BRANDTAG,
        payload: {brandTags: res.data.result},
      });
    } catch (err) {
      return err.response.data.descEn;
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
    } catch (err) {
      return err.response.data.descEn;
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
    } catch (err) {
      return err.response.data.descEn;
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
    } catch (err) {
      return err.response.data.descEn;
    }
  };
  //edit brand tag

  return (
    <AdminContext.Provider
      value={{
        products: AllAdmin.products,
        subCategory: AllAdmin.subCategory,
        specItems: AllAdmin.specItems,
        brands: AllAdmin.brands,
        brandTag: AllAdmin.brandTag,
        mainCategory: AllAdmin.mainCategory,
        fetchAllSpecItem,
        fetchSubCategory,
        fetchSpecItem,
        fetchBrand,
        fetchCategory,
        fetchBrandTag,
        fetchAllProduct,
        createProductImages,
        addBrand,
        addCategory,
        addSubCategory,
        addBrandTags,
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
