import axios from '../config/axios';
export const getSubCategory = () => axios.get('/categories/sub-category');
export const getAllBrand = () => axios.get('/categories/brand');

export const getBrandTag = (brandId) =>
  axios.get(`/categories/brandtag/${brandId}`);
export const getSpecByCategory = (subCategoryId) =>
  axios.get(`/products/spec-items/${subCategoryId}`);

export const createProductImages = (productId, formData) =>
  axios.post(`/products/img/${productId}`, formData);
