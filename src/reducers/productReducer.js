// ? product quantity

export const FETCH_HOME_PRODUCT = 'FETCH_HOME_PRODUCT';
export const FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST';
export const FETCH_PRODUCT_INFO = 'FETCH_PRODUCT_INFO';
export const FETCH_PRODUCT_IMAGE = 'FETCH_PRODUCT_IMAGE';
export const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

//fetch for admin
export const FETCH_PRODUCT_SINGLE = 'FETCH_PRODUCT_SINGLE';
export const FETCH_PRODUCT_PREVIEW = 'FETCH_PRODUCT_PREVIEW';
export const FETCH_SPEC_PRODUCT = 'FETCH_SPEC_PRODUCT';

export const ADD_SPEC_DETAIL = 'ADD_SPEC_DETAIL';
export const DELETE_SPEC_DETAIL = 'DELETE_SPEC_DETAIL';

export const INIT_PRODUCT = {
  product: {},
  productList: [],
  productListFilter: [],
  newProduct: [],
  salesProduct: [],
  productInfo: {},
  productImages: [],
  productSpec: [],
  specItems: [],
  specDetail: [],
  specProduct: [],
  productPreview: {},
  error: null,
};

function productReducer(state, action) {
  switch (action.type) {
    case FETCH_HOME_PRODUCT:
      return {
        ...state,
        newProduct: action.payload.newProduct,
        salesProduct: action.payload.salesProduct,
        error: null,
      };

    case FETCH_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload.productList,
        hasMore: action.payload.hasMore,
        error: null,
      };

    case FETCH_PRODUCT_INFO:
      return {
        ...state,
        productInfo: action.payload.productInfo,
        productSpec: action.payload.productSpec,
        specItems: action.payload.specItems,
        specDetail: action.payload.specDetail,
        productImages: action.payload.productImages,
        error: null,
      };

    case FETCH_PRODUCT_IMAGE:
      return {
        ...state,
        productImages: action.payload.productImages,
      };

    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case FETCH_PRODUCT_PREVIEW:
      return {
        ...state,
        productPreview: action.payload.productPreview,
        specItems: action.payload.specItems,
        specDetail: action.payload.specDetail,
      };

    case FETCH_SPEC_PRODUCT:
      return {
        ...state,
        specProduct: action.payload.specProduct,
      };

    case FETCH_PRODUCT_SINGLE:
      return {
        ...state,
        product: action.payload.product,
      };

    case ADD_SPEC_DETAIL:
      const newSpecDetail = [action.payload.newSpecDetail, ...state.specDetail];

      return {...state, specDetail: newSpecDetail};

    case DELETE_SPEC_DETAIL:
      const {id} = action.payload;
      const removeItem = state.specDetail.filter((item) => item.id !== id);

      return {...state, specDetail: removeItem};

    default:
      return state;
  }
}

export default productReducer;
