//action.type
import {
  FETCH_ADDRESS,
  ADD_ADDRESS,
  EDIT_ADDRESS,
  DELETE_ADDRESS,
  SET_DEFAULT_ADDRESS,
} from './addressType';
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
        ...state,
        address: action.payload.address,
        defaultAddress: defaultAddr,
      };
    case ADD_ADDRESS:
      const newAddress = [action.payload.newAddress, ...state.address];
      return {
        ...state,
        address: newAddress,
      };
    case EDIT_ADDRESS:
      const {id, updatedAddress} = action.payload;
      const findIndex = state.address.findIndex((addr) => addr.id === id);
      if (findIndex === -1) return state;
      const updateAddressList = [...state.address];
      updateAddressList[findIndex] = {
        ...updateAddressList[findIndex],
        ...updatedAddress,
      };

      return {
        ...state,
        address: updateAddressList,
        defaultAddress:
          state.defaultAddress.id === id
            ? updatedAddress
            : state.defaultAddress,
      };
    case DELETE_ADDRESS:
      const {id: deletedId} = action.payload;
      const oldAddress = state.address.filter((addr) => addr.id !== deletedId);

      let defaultAddress = state.defaultAddress;
      if (defaultAddress && defaultAddress.id === deletedId) {
        defaultAddress = oldAddress.length > 0 ? oldAddress[0] : {};
      }
      return {
        ...state,
        address: oldAddress,
        defaultAddress: defaultAddress,
      };
    case SET_DEFAULT_ADDRESS:
      const defAddress = action.payload.address;
      return {...state, defaultAddress: defAddress};
    default:
      return state;
  }
}

export default addressReducer;
