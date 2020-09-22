import cart from "./cart/cartReducer";
import product from "./product/productReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ cart, product });

export default rootReducer;
