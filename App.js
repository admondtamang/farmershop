import React from "react";
import Root from "./src/Root";
import { Provider } from "react-redux";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import store from "./src/redux/store";
export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#2962ff",
      accent: "#ffc046",
    },
  };
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Root />
      </PaperProvider>
    </Provider>
  );
}
