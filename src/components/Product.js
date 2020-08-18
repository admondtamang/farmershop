import React from "react";
import { ScrollView, Image, View } from "react-native";
import { Button, Text, Card } from "react-native-paper";
export default function Product({ item, onDispatch, navigation, styled }) {
  return (
    <Card
      style={[
        {
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          height: 200,
        },
        styled,
      ]}
      onPress={() =>
        navigation.navigate("ProductScreen", {
          item: item,
          onDispatch: onDispatch,
        })
      }
    >
      <Image
        style={{ width: 120, height: 120, marginBottom: 5, borderRadius: 2 }}
        source={require("../../assets/images/" + item.src)}
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
