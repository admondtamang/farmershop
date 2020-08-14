import React from "react";
import { ScrollView, Image, View } from "react-native";
import { Button, Text, Card } from "react-native-paper";
export default function Product({ item, onDispatch, navigation }) {
  return (
    // <View
    //   style={{ width: 130, justifyContent: "center", alignItems: "center" }}
    // >
    <Card
      style={{
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => navigation.navigate("ProductScreen", { item: item })}
    >
      <Image
        style={{ width: 120, marginBottom: 5, borderRadius: 10 }}
        source={require(`../../assets/images/cabbage.jpg`)}
      />
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text>Nrs {item.price}</Text>
      </View>
      <Button color="green" onPress={onDispatch} icon="basket">
        Buy
      </Button>
    </Card>
    // </View>
  );
}
