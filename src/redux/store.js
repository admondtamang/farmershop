import cartReducer from "./cart/cartReducer";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";

const midddleware = [logger];

const store = createStore(cartReducer, applyMiddleware(...midddleware));
export default store;
