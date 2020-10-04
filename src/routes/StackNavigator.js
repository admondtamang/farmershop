import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import ShoppingCartIcon from "../components/ShoppingCartIcon";
import { CartScreen, ProductScreen } from "../screens";
import { useTranslation } from "react-i18next";
const Stack = createStackNavigator();

export default function StackNavigator() {
  const [t, i18n] = useTranslation();
  const i18 = (key) => {
    return t(key);
  };

  function getHeaderTitle(route) {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : "home";
    switch (routeName) {
      case "Home":
        return `${i18("BottomTab.home")}`;
      case "Order":
        return `${i18("BottomTab.order")}`;
      case "Profile":
        return `${i18("BottomTab.profile")}`;
      case "Price":
        return `${i18("BottomTab.price")}`;
    }
  }
  return (
    <Stack.Navigator
      // initialRouteName="CartScreen"
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
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}
