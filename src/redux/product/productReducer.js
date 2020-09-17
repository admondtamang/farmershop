import products from "./productData";

const INITIA_STATE = {
  collections: products,
};

const productReducer = (state = INITIA_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
