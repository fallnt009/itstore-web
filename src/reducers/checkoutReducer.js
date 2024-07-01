//action.type
export const FETCH_CHECKOUT = 'FETCH_CHECKOUT';
export const FETCH_SERVICE = 'FETCH_SERVICE';
export const FETCH_PAYMENT = 'FETCH_PAYMENT';
export const CREATE_CHECKOUT = 'CREATE_CHECKOUT';
export const UPDATE_CHECKOUT = 'UPDATE_CHECKOUT';
export const SELECT_ADDRESS = 'SELECT_ADDRESS';
export const SELECT_SERVICE = 'SELECT_SERVICE';
export const SELECT_PAYMENT = 'SELECT_PAYMENT';

//initial state
export const INIT_CHECKOUT = {
  checkout: {},
  service: [],
  payment: [],
  selectedAddress: null,
  selectedService: null,
  selectedPayment: null,
};

function checkoutReducer(state, action) {
  switch (action.type) {
    case FETCH_CHECKOUT:
      return {
        ...state,
        checkout: action.payload.checkout,
      };
    case FETCH_SERVICE:
      return {
        ...state,
        service: action.payload.service,
      };
    case FETCH_PAYMENT:
      return {
        ...state,
        payment: action.payload.payment,
      };
    case CREATE_CHECKOUT:
      return {
        ...state,
        checkout: action.payload.checkout,
      };
    case UPDATE_CHECKOUT:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          ...action.payload.data,
        },
      };

    case SELECT_ADDRESS:
      return {
        ...state,
        selectedAddress: action.payload.selectedAddress,
      };

    case SELECT_SERVICE:
      return {
        ...state,
        selectedService: action.payload.selectedService,
      };
    case SELECT_PAYMENT:
      return {
        ...state,
        selectedPayment: action.payload.selectedPayment,
      };

    default:
      return state;
  }
}

export default checkoutReducer;
