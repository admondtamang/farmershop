import { createStore, combineReducers } from "redux";
import cartItems from "../reducers/cartItems";

export default createStore(cartItems);
