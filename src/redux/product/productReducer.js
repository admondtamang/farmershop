import { products } from "./productData";
import { ADD_PRODUCT } from "./productTypes";
import { addProductToArray } from "./product.utils";
const INITIAL_STATE = {
  collections: products,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log("ekds");
      return {
        ...state,
        collections: addProductToArray(state.collections, action.payload),
      };
    default:
      return state;
  }
};

export default productReducer;
