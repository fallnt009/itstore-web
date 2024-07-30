export const FETCH_SUBCATEGORY = 'FETCH_SUBCATEGORY';
export const FETCH_SPEC_ITEM = 'FETCH_SPEC_ITEM';
export const FETCH_BRAND = 'FETCH_BRAND';
export const FETCH_BRAND_TAG = 'FETCH_BRAND_TAG';
export const SET_ERROR = 'SET_ERROR';

export const INTT_ADMIN = {
  subCategory: [],
  specItems: [],
  brands: [],
  brandTag: [],
  mainCategory: [],
  error: null,
};

function adminReducer(state, action) {
  switch (action.type) {
    case FETCH_SUBCATEGORY: {
      return {...state, subCategory: action.payload.subCategory, error: null};
    }
    case FETCH_SPEC_ITEM: {
      return {...state, specItems: action.payload.specItems, error: null};
    }
    case FETCH_BRAND: {
      return {...state, brands: action.payload.brands, error: null};
    }
    case FETCH_BRAND_TAG: {
      return {...state, brandTag: action.payload.brandTag, error: null};
    }
    case SET_ERROR: {
      return {error: action.payload};
    }
    default: {
      return state;
    }
  }
}

export default adminReducer;
