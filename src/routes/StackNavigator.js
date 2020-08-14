import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import ShoppingCartIcon from "../components/ShoppingCartIcon";
import { CartScreen, ProductScreen } from "../screens";
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
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <ShoppingCartIcon />,
      }}
    >
      <Stack.Screen
        name="Home"
        options={({ route }) => ({
          title: getHeaderTitle(route),
        })}
        component={TabNavigator}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerRight: null,
        }}
      />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}
