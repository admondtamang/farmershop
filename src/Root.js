import React from "react";
import HomeNavigator from "./routes/HomeNavigator";
import StackNavigator from "./routes/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
const Root = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default Root;
