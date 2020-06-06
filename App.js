import React from "react";
import Root from "./src/Root";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store";
export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
