export const FETCH_SUBCATEGORY = 'FETCH_SUBCATEGORY';
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const FETCH_SPEC_ITEM = 'FETCH_SPEC_ITEM';
export const FETCH_BRAND = 'FETCH_BRAND';
export const FETCH_BRAND_TAG = 'FETCH_BRAND_TAG';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_SPEC_PRODUCT = 'FETCH_SPEC_PRODUCT';

export const ADD_BRAND = 'ADD_BRAND';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_SUBCATEGORY = 'ADD_SUBCATEGORY';
export const ADD_BRANDTAG = 'ADD_BRANDTAG';
export const ADD_SPEC_PRODUCT = 'ADD_SPEC_PRODUCT';

export const EDIT_BRAND = 'EDIT_BRAND';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const EDIT_SUBCATEGORY = 'EDIT_SUBCATEGORY';
export const EDIT_SPEC_PRODUCT = 'EDIT_SPEC_PRODUCT';

export const DELETE_SPEC_PRODUCT = 'DELETE_SPEC_PRODUCT';

export const INTT_ADMIN = {
  products: [],
  subCategory: [],
  specItems: [],
  brands: [],
  brandTag: [],
  mainCategory: [],
  specProduct: [],
};

function adminReducer(state, action) {
  switch (action.type) {
    case FETCH_CATEGORY: {
      return {...state, mainCategory: action.payload.category};
    }
    case FETCH_SUBCATEGORY: {
      return {...state, subCategory: action.payload.subCategory};
    }
    case FETCH_SPEC_ITEM: {
      return {...state, specItems: action.payload.specItems};
    }
    case FETCH_BRAND: {
      return {...state, brands: action.payload.brands};
    }
    case FETCH_BRAND_TAG: {
      return {...state, brandTag: action.payload.brandTag};
    }
    case FETCH_PRODUCT: {
      return {...state, products: action.payload.products};
    }
    case FETCH_SPEC_PRODUCT: {
      return {...state, specProduct: action.payload.specProduct};
    }

    case ADD_BRAND: {
      const newBrandsList = [action.payload.newBrands, ...state.brands];
      return {
        ...state,
        brands: newBrandsList,
      };
    }
    case ADD_CATEGORY: {
      const newCategoryList = [
        action.payload.newCategory,
        ...state.mainCategory,
      ];
      return {...state, mainCategory: newCategoryList};
    }
    case ADD_SUBCATEGORY: {
      const newSubCategoryList = [
        action.payload.newSubCategory,
        ...state.subCategory,
      ];
      return {...state, subCategory: newSubCategoryList};
    }

    case ADD_BRANDTAG: {
      const newBrandTag = [action.payload.brandTags, ...state.brandTag];
      return {...state, brandTag: newBrandTag};
    }

    case ADD_SPEC_PRODUCT:
      const newSpecProduct = [action.payload.specProduct, ...state.specProduct];
      return {
        ...state,
        specProduct: newSpecProduct,
      };

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

    case EDIT_SPEC_PRODUCT:
      const {id, updatedProductSpec} = action.payload;

      const getIndex = state.specProduct.findIndex(
        (specProduct) => specProduct.SpecProduct.id === id
      );

      if (getIndex === -1) return state;
      const specProductList = [...state.specProduct];

      specProductList[getIndex] = {
        ...specProductList[getIndex],
        SpecProduct: {
          ...specProductList[getIndex].SpecProduct,
          ...updatedProductSpec,
        },
      };

      return {
        ...state,
        specProduct: specProductList,
      };

    case DELETE_SPEC_PRODUCT:
      const {id: specProductId} = action.payload;
      const updatedSpecProduct = state.specProduct.filter(
        (item) => item.SpecProduct.id !== specProductId
      );
      return {
        ...state,
        specProduct: updatedSpecProduct,
      };
    default: {
      return state;
    }
  }
}

export default adminReducer;
