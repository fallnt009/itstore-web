import axios from '../config/axios';
export const getAllCategory = () => axios.get('/categories/category');
export const getSubCategory = () => axios.get('/categories/sub-category');
export const getAllBrand = () => axios.get('/categories/brand');
export const getAllProduct = (
  page,
  pageSize,
  order,
  brandId,
  categoryId,
  subCategoryId
) =>
  axios.get('/products/all', {
    params: {page, pageSize, order, brandId, categoryId, subCategoryId},
  });

// export const getSubCategoryByCategoryId = (categoryId) =>
//   axios.get(`/categories/sub-category/${categoryId}`);

export const getBrandTag = (brandId) =>
  axios.get(`/categories/brandtag/${brandId}`);
export const getSpecByCategory = (subCategoryId) =>
  axios.get(`/products/spec-items/${subCategoryId}`);
export const createProductImages = (productId, formData) =>
  axios.post(`/products/img/${productId}`, formData);

export const createBrand = (data) => axios.post('/categories/brand', data);
export const createCategory = (data) =>
  axios.post('/categories/category', data);
export const createSubCategory = (data) =>
  axios.post('/categories/sub-category', data);
export const createBrandTag = (data) =>
  axios.post('/categories/brandtag', data);

export const updateBrand = (brandId, data) =>
  axios.patch(`/categories/brand/${brandId}`, data);
export const updateCategory = (categoryId, data) =>
  axios.patch(`/categories/category/${categoryId}`, data);
export const updateSubCategory = (subCategoryId, data) =>
  axios.patch(`/categories/sub-category/${subCategoryId}`, data);
