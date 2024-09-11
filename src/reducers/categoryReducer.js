//action.type
export const FETCH_CATEGORY_ITEM = 'FETCH_CATEGORY_ITEM';
export const FETCH_CATEGORY_FILTER = 'FETCH_CATEGORY_FILTER';

export const SELECT_ITEM_FILTER = 'FETCH_ITEM_FILTER';

export const SET_CATEGORY_ITEM = 'SET_CATEGORY_ITEM';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_HAS_MORE = 'SET_HAS_MORE';
export const CATEGORY_ERROR = 'CATEGORY_ERROR';

export const INIT_CATEGORY = {
  categoryItem: [],
  categoryItemFilter: [],
  totalItems: 1,
  totalPages: 1,
  currentPage: 1,
  error: null,
  categoryFilter: [],
};

function categoryReducer(state, action) {
  switch (action.type) {
    case FETCH_CATEGORY_ITEM: {
      return {
        ...state,
        categoryItem: action.payload.categoryItem,
        categoryItemFilter: action.payload.categoryItemFilter,
        totalItems: action.payload.totalItems,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
        error: null,
      };
    }
    case FETCH_CATEGORY_FILTER: {
      return {
        ...state,
        categoryFilter: action.payload.categoryFilter,
      };
    }
    case SELECT_ITEM_FILTER:
      return {
        ...state,
      };
    case SET_CATEGORY_ITEM: {
      return {
        ...state,
        categoryItem: action.payload.categoryItem,
      };
    }
    case CATEGORY_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export default categoryReducer;
