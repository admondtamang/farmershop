import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Button } from "react-native-paper";

export default function ProductScreen({ route, navigation }) {
  const {
    params: { item, onDispatch },
  } = route;
  return (
    <View
      style={{
        margin: 30,
      }}
    >
      <Image
        style={{
          height: 220,
          marginBottom: 5,
          borderRadius: 10,
        }}
        source={require("../../../assets/images/" + item.src)}
      />
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>{item.name}</Text>
        <Text>Description of Cabbage</Text>
        <Text>Rs {item.price} per kg</Text>
        <Button color="green" icon="basket" onPress={onDispatch}>
          Buy
        </Button>
      </View>
      {/* seller detail */}
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Seller Detail</Text>
        <Text>Name: Hari</Text>
        <Text>Contact no: 89498165156</Text>
      </View>
    </View>
  );
}
