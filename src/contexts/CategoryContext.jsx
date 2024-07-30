import {createContext, useCallback, useReducer} from 'react';

import categoryReducer, {
  INIT_CATEGORY,
  FETCH_CATEGORY_ITEM,
  SET_CATEGORY_ITEM,
  CATEGORY_ERROR,
} from '../reducers/categoryReducer';

import * as ProductApi from '../apis/product-api';

const CategoryContext = createContext();

export default function CategoryContextProvider({children}) {
  const [{categoryItem, totalItems, totalPages, currentPage, error}, dispatch] =
    useReducer(categoryReducer, INIT_CATEGORY);

  //fetch Category Item
  const fetchCategoryItem = useCallback(
    async (categoryName, subCategoryName, page, limit, filter) => {
      try {
        //fetch filterCategory

        //fetch categoryItem
        const categoryItem = await ProductApi.getProductByCategory(
          categoryName,
          subCategoryName,
          page,
          limit,
          filter
        );

        dispatch({
          type: FETCH_CATEGORY_ITEM,
          payload: {
            categoryItem: categoryItem.data.result,
            totalItems: categoryItem.data.totalItems,
            totalPages: categoryItem.data.totalPages,
            currentPage: categoryItem.data.currentPage,
            //add filterCategory
          },
        });
      } catch (err) {
        dispatch({
          type: CATEGORY_ERROR,
          payload: err.message,
        });
      }
    },
    [dispatch]
  );

  return (
    <CategoryContext.Provider
      value={{
        categoryItem,
        totalItems,
        totalPages,
        currentPage,
        error,
        fetchCategoryItem,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export {CategoryContext};
