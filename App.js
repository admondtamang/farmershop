import React from "react";
import Root from "./src/Root";
import { Provider } from "react-redux";
import store from "./src/redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
