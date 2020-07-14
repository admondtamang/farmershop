import React from "react";
import { View, TextInput, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
export default function Search() {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 10,
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 0 },
        shadowColor: "black",
        marginHorizontal: 20,
        shadowOpacity: 0.2,
        elevation: 1,
        marginTop: Platform.OS == "android" ? 30 : null,
      }}
    >
      <Icon
        name="ios-search"
        size={20}
        style={{ marginRight: 10, marginTop: 5 }}
      />
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Try Vegetables"
        placeholderTextColor="grey"
        style={{
          flex: 1,
          borderColor: "gray",
          fontWeight: "700",
          backgroundColor: "white",
        }}
      />
    </View>
  );
}
