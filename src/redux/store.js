import cartReducer from "./cart/cartReducer";
import { createStore } from "redux";

const store = createStore(cartReducer);
export default store;
