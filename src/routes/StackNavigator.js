import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeNavigator from "./HomeNavigator";
import { Button } from "react-native";
import ShoppingCartIcon from "../common/ShoppingCartIcon";
import ElectronicScreen from "./../screens/ElectronicScreen";
import BookScreen from "./../screens/BookScreen";
import { CartScreen } from "../screens";
const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : "home";
  switch (routeName) {
    case "Home":
      return "Home";
    case "Order":
      return "Order";
    case "Profile":
      return "Profile";
  }
}

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={({ route }) => ({
          title: getHeaderTitle(route),
          headerRight: () => <ShoppingCartIcon />,
        })}
        component={HomeNavigator}
      />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="Electronics" component={ElectronicScreen} />
      <Stack.Screen name="Book" component={BookScreen} />
    </Stack.Navigator>
  );
}
