import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SellScreen from "../screens/OrderScreen/SellScreen";
import DemandScreen from "../screens/OrderScreen/DemandScreen";
import React from "react";
const Tab = createMaterialTopTabNavigator();

function OrderTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Sell" component={SellScreen} />
      <Tab.Screen name="Demand" component={DemandScreen} />
    </Tab.Navigator>
  );
}

export default OrderTab;
