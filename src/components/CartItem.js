import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph, Button, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux";

export default function CartItem({ item, onDispatch }) {
  // const dispatch = useDispatch();
  return (
    <View
      style={{ width: 130, justifyContent: "center", alignItems: "center" }}
    >
      <Image
        style={{ width: 120, height: 120, marginBottom: 5, borderRadius: 10 }}
        source={require(`../../assets/images/${item.src}`)}
      />
      <Text>{item.name}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Nrs {item.price}</Text>

        <Button onPress={onDispatch}>Buy</Button>
      </View>
    </View>
  );
}
