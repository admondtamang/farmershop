import React from "react";
import { View, Text } from "react-native";
import { iOSUIKit } from "react-native-typography";

export default function ItemTitle({ name }) {
  return (
    <View
      style={{
        justifyContent: "space-between",
        marginHorizontal: 20,
        flexDirection: "row",
      }}
    >
      <Text style={iOSUIKit.title3Emphasized}>{name}</Text>
      <Text>More</Text>
    </View>
  );
}
