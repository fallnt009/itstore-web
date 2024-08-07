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

export const createProduct = (bcsId, data) =>
  axios.post(`/products/create/${bcsId}`, data);
