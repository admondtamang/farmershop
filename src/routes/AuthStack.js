import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, SignupScreen } from "../screens";
import StackNavigator from "./StackNavigator";

export default function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={StackNavigator} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
    </Stack.Navigator>
  );
}
