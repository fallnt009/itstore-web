import axios from '../config/axios';

//HOME + PRODUCT PAGE
export const getNewProduct = (page, pageSize) =>
  axios.get('/products/new', {params: {page, pageSize}});
export const getSalesProduct = (page, pageSize) =>
  axios.get('/products/sales', {params: {page, pageSize}});

export const getProductByCategory = (
  categoryName,
  subCategoryName,
  page,
  pageSize,
  filter
) =>
  axios.get(`/categories/product/${categoryName}/${subCategoryName}`, {
    params: {page, pageSize, filter},
  });

export const getProductInfo = (categoryName, subCategoryName, productName) =>
  axios.get(
    `/categories/product/${categoryName}/${subCategoryName}/${productName}`
  );
export const getProductSpec = (productName) =>
  axios.get(`/products/spec-prod/${productName}`);

export const getProductInfoImage = (productName) =>
  axios.get(`/products/image/${productName}`);

//PRODUCT
export const getProductById = (productId) =>
  axios.get(`/products/${productId}`);

export const createProduct = (bcsId, data) =>
  axios.post(`/products/create/${bcsId}`, data);

export const updateProduct = (productId, data) =>
  axios.patch(`/products/${productId}`, data);

//SPEC ITEM
export const getSpecBySubCategory = (subCategoryId) =>
  axios.get(`/products/spec-items/${subCategoryId}`);

//?
export const getSpecItemById = (specId) =>
  axios.get(`/products/spec-items/${specId}`);

export const createSpecItem = (data) =>
  axios.post('/products/spec-items', data);
export const updateSpecItem = (specId, data) =>
  axios.patch(`/products/spec-items/${specId}`, data);

//PRODUCT SPEC
export const getAllProductSpec = (page, pageSize, filter) =>
  axios.get('/products/product-spec/', {params: {page, pageSize, filter}});

//SUB SPEC for details info
export const getSpecDetail = (productId) =>
  axios.get(`/products/subspec/${productId}`); // use this
export const createSubSpec = (productId, data) =>
  axios.post(`/products/subspec/${productId}`, data);
export const deleteSubSpec = (specProductId, productId) =>
  axios.delete(`/products/subspec/${productId}`, {
    data: {specProductId: specProductId},
  });

//SPEC PRODUCT
export const getSpecProductByItemId = (specItemId) =>
  axios.get(`/products/spec-product/${specItemId}`);
