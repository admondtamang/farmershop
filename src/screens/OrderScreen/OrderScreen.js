import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const OrderScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => {
      <Fontisto name="shopping-basket" size={24} color="black" />;
    },
  });
  return (
    <View>
      <Text>Order</Text>
    </View>
  );
};

export default OrderScreen;
