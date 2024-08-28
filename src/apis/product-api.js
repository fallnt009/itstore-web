import axios from '../config/axios';

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

//get product by id
export const getProductById = (productId) =>
  axios.get(`/products/${productId}`);

export const createProduct = (bcsId, data) =>
  axios.post(`/products/create/${bcsId}`, data);

export const updateProduct = (productId, data) =>
  axios.patch(`/products/${productId}`, data);

export const getSpecItemById = (specId) =>
  axios.get(`/products/spec-items/${specId}`);
export const createSpecItem = (data) =>
  axios.post('/products/spec-items', data);
export const updateSpecItem = (specId, data) =>
  axios.patch(`/products/spec-items/${specId}`, data);

//Product Spec
export const getAllProductSpec = (page, pageSize, filter) =>
  axios.get('/products/product-spec/', {params: {page, pageSize, filter}});

export const getProductSpecByProductId = (productId) =>
  axios.get(`/products/product-spec/${productId}`);
