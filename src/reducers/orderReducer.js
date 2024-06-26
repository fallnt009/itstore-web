//action type
export const FETCH_ORDER = 'FETCH_ORDER';

//inital state
export const INIT_ORDER = {
  order: [],
};

function orderReducer(state, action) {
  switch (action.type) {
    case FETCH_ORDER:
      return {
        ...state,
        order: action.payload.order,
      };
    default:
      return state;
  }
}

export default orderReducer;
