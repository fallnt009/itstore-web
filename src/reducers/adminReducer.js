export const FETCH_SUBCATEGORY = 'FETCH_SUBCATEGORY';
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const FETCH_SPEC_ITEM = 'FETCH_SPEC_ITEM';
export const FETCH_BRAND = 'FETCH_BRAND';
export const FETCH_BRAND_TAG = 'FETCH_BRAND_TAG';
export const ADD_BRAND = 'ADD_BRAND';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_SUBCATEGORY = 'ADD_SUBCATEGORY';
export const EDIT_BRAND = 'EDIT_BRAND';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const EDIT_SUBCATEGORY = 'EDIT_SUBCATEGORY';
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
    case FETCH_CATEGORY: {
      return {...state, mainCategory: action.payload.category, error: null};
    }
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
    case ADD_BRAND: {
      const newBrandsList = [action.payload.newBrands, ...state.brands];
      return {
        ...state,
        brands: newBrandsList,
        error: null,
      };
    }
    case ADD_CATEGORY: {
      const newCategoryList = [
        action.payload.newCategory,
        ...state.mainCategory,
      ];
      return {...state, mainCategory: newCategoryList, error: null};
    }
    case ADD_SUBCATEGORY: {
      const newSubCategoryList = [
        action.payload.newSubCategory,
        ...state.subCategory,
      ];
      return {...state, subCategory: newSubCategoryList, error: null};
    }

    case EDIT_BRAND: {
      const {id, updatedBrand} = action.payload;
      const getIndex = state.brands.findIndex((brand) => brand.id === id);
      if (getIndex === -1) return state;
      const updateBrandList = [...state.brands];
      updateBrandList[getIndex] = Object.assign(
        {},
        updateBrandList[getIndex],
        updatedBrand
      );
      return {...state, brands: updateBrandList};
    }
    case EDIT_CATEGORY: {
      const {id, updatedCategory} = action.payload;
      const getIndex = state.mainCategory.findIndex(
        (category) => category.id === id
      );
      if (getIndex === -1) return state;
      const updateCategoryList = [...state.mainCategory];
      updateCategoryList[getIndex] = Object.assign(
        {},
        updateCategoryList[getIndex],
        updatedCategory
      );
      return {...state, mainCategory: updateCategoryList};
    }
    case EDIT_SUBCATEGORY: {
      const {id, updatedSubCategory} = action.payload;
      const getIndex = state.subCategory.findIndex(
        (subCategory) => subCategory.id === id
      );
      if (getIndex === -1) return state;
      const updateSubCategoryList = [...state.subCategory];
      updateSubCategoryList[getIndex] = Object.assign(
        {},
        updateSubCategoryList[getIndex],
        updatedSubCategory
      );
      return {...state, subCategory: updateSubCategoryList};
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
