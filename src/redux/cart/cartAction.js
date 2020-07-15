import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./cartTypes";

export const addItemToCart = (product) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: product,
  };
};

export const removeItemFromCart = (product) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: product,
  };
};
