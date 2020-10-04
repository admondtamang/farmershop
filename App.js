import React, { Suspense } from "react";
import Root from "./src/Root";
import { Provider } from "react-redux";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import store from "./src/redux/store";
import { Text } from "react-native";
// import "./i18next";
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
      <Suspense fallback={<Text>Loading profile...</Text>}>
        <PaperProvider theme={theme}>
          <Root />
        </PaperProvider>
      </Suspense>
    </Provider>
  );
}
