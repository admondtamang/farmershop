import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./cartTypes";
import { addItemTocart, removeItemfromCart } from "./cartUtils";
const INITIAL_STATE = {
  cartItems: [],
};

const cartItems = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemTocart(state.cartItems, action.payload),
      };
    // return [...state, action.payload];
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemfromCart(state.cartItems, action.payload),
      };
    // return state.filter((cartItem) => cartItem.id !== action.payload.id);
    default:
      return state;
  }
};

export default cartItems;
