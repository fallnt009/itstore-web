import axios from 'axios';

export const getNewProduct = (page, pageSize) =>
  axios.get('/products/new', {params: {page, pageSize}});
export const getSalesProduct = (page, pageSize) =>
  axios.get('/products/sales', {params: {page, pageSize}});

export const getProductByCategory = (
  categoryName,
  subCategoryName,
  page,
  pageSize
) =>
  axios.get(`/categories/product/${categoryName}/${subCategoryName}`, {
    params: {page, pageSize},
  });

export const getProductInfo = (categoryName, subCategoryName, productName) =>
  axios.get(
    `/categories/product/${categoryName}/${subCategoryName}/${productName}`
  );
export const getProductSpec = (productName) =>
  axios.get(`/products/product-spec/${productName}`);
