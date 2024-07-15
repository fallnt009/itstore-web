import axios from 'axios';

export const getNewProduct = () => axios.get('/products/new');
export const getSalesProduct = () => axios.get('/products/sales');
export const getProductByCategory = (categoryName, subCategoryName) =>
  axios.get(`/categories/product/${categoryName}/${subCategoryName}`);
export const getProductInfo = (categoryName, subCategoryName, productName) =>
  axios.get(
    `/categories/product/${categoryName}/${subCategoryName}/${productName}`
  );
export const getProductSpec = (productName) =>
  axios.get(`/products/product-spec/${productName}`);
