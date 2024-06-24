//action.type
export const SELECT_CART = 'SELECT_CART';
export const SELECT_ADDRESS = 'SELECT_ADDRESS';
export const SELECT_PARCEL = 'SELECT_PARCEL';
export const SELECT_PAYMENT = 'SELECT_PAYMENT';

//initial state
export const INIT_CHECKOUT = {
  selectedCart: [],
  selectedAddress: {},
  selectedParcel: {},
  selectedPayment: {},
};

function checkoutReducer(state, action) {
  switch (action.type) {
    case SELECT_CART:
      return {
        ...state,
        selectedCart: action.payload.cart,
      };
    case SELECT_ADDRESS:
      return {
        ...state,
        selectedAddress: action.payload.address,
      };
    case SELECT_PARCEL:
      return {
        ...state,
        selectedParcel: action.payload.parcel,
      };
    case SELECT_PAYMENT:
      return {
        ...state,
        selectedPayment: action.payload.payment,
      };
    default:
      return state;
  }
}

export default checkoutReducer;
