import React from "react";
import { Image, View } from "react-native";
import { Button, Text, Card } from "react-native-paper";
export default function Product({
  item,
  onDispatch,
  navigation,
  productHeight,
  onToggleSnackBar,
}) {
  return (
    <Card
      style={{
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        height: productHeight + 70,
      }}
      onPress={() =>
        navigation.navigate("Product", {
          item: item,
          onDispatch: onDispatch,
        })
      }
    >
      <Image
        style={{ width: 100, height: 100, marginBottom: 5, borderRadius: 2 }}
        source={{ uri: item.src }}
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
      <Button
        color="green"
        onPress={() => {
          onDispatch(), onToggleSnackBar();
        }}
        icon="basket"
      >
        Buy
      </Button>
    </Card>
  );
}
