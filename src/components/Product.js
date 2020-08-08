import React from "react";
import { View, Image } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Product({ item, onDispatch }) {
  return (
    <View
      style={{ width: 130, justifyContent: "center", alignItems: "center" }}
    >
      <Image
        style={{ width: 120, height: 120, marginBottom: 5, borderRadius: 10 }}
        source={{ uri: `../../assets/images/${item.src}` }}
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
