// ? product quantity

export const FETCH_HOME_PRODUCT = 'FETCH_HOME_PRODUCT';
export const FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST';
export const FETCH_PRODUCT_INFO = 'FETCH_PRODUCT_INFO';
export const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

export const INIT_PRODUCT = {
  productList: [],
  productListFilter: [],
  newProduct: [],
  salesProduct: [],
  productInfo: [],
  productSpec: [],
  error: null,
};

function productReducer(state, action) {
  switch (action.type) {
    case FETCH_HOME_PRODUCT: {
      return {
        ...state,
        newProduct: action.payload.newProduct,
        salesProduct: action.payload.salesProduct,
        error: null,
      };
    }
    case FETCH_PRODUCT_LIST: {
      return {
        ...state,
        productList: action.payload.productList,
        hasMore: action.payload.hasMore,
        error: null,
      };
    }
    case FETCH_PRODUCT_INFO: {
      return {
        ...state,
        productInfo: action.payload.productInfo,
        productSpec: action.payload.productSpec,
        error: null,
      };
    }
    case FETCH_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}

export default productReducer;
