import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./cartTypes";
const initialState = {
  cartItems: [],
};

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return [...state, action.payload];
    case REMOVE_ITEM_FROM_CART:
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
    default:
      return state;
  }
};

export default cartItems;
