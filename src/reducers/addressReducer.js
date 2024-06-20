//action.type
export const FETCH_ADDRESS = 'FETCH_ADDRESS';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const EDIT_ADDRESS = 'EDIT_ADDRESS';
export const DELETE_ADDRESS = 'DELETE_ADDRESS';
export const SET_DEFAULT_ADDRESS = 'SET_DEFAULT_ADDRESS';

//initial state
export const INIT_ADDRESS = {
  address: [],
  defaultAddress: {},
};

function addressReducer(state, action) {
  switch (action.type) {
    case FETCH_ADDRESS:
      let defaultAddr = action.payload.address.find(
        (addr) => addr.UserAddresses.isDefault
      );

      return {
        address: action.payload.address,
        defaultAddress: defaultAddr,
      };
    case ADD_ADDRESS:
      const newAddress = [action.payload.newAddress, ...state.address];
      return {
        address: newAddress,
      };
    case EDIT_ADDRESS:
      const {id, updatedAddress} = action.payload;
      const findIndex = state.address.findIndex((addr) => addr.id === id);
      if (findIndex === -1) return state;
      const updateAddressList = [...state.address];
      updateAddressList[findIndex] = Object.assign(
        {},
        updateAddressList[findIndex],
        updatedAddress
      );

      return {
        address: updateAddressList,
        defaultAddress: updatedAddress,
      };
    case SET_DEFAULT_ADDRESS:
      return {defaultAddress: action.payload.address};
    default:
      return state;
  }
}

export default addressReducer;
