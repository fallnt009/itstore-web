//action.type

//initial state
export const INIT_CHECKOUT = {
  selectedAddress: {},
  selectedParcel: {},
  selectedPayment: {},
  orderDetails: [],
};

function checkoutReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default checkoutReducer;
