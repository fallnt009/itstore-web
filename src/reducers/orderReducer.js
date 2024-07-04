//action type
export const FETCH_ORDER = 'FETCH_ORDER';
export const SELECT_ORDER = 'SELECT_ORDER';

//inital state
export const INIT_ORDER = {
  order: [],
  orderItems: [],
  selectedOrder: null,
};

function orderReducer(state, action) {
  switch (action.type) {
    case FETCH_ORDER:
      return {
        ...state,
        order: action.payload.order,
      };

    case SELECT_ORDER:
      return {
        ...state,
        selectedOrder: action.payload.selectedOrder,
        orderItems: action.payload.orderItems,
      };
    default:
      return state;
  }
}

export default orderReducer;
