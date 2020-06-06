import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Products = (props) => {
  return (
    <View style={styles.container}>
      {props.products.map((item, index) => {
        return (
          <View key={index} style={{ padding: 20 }}>
            <Button
              onPress={() => props.onPress(item)}
              title={item.name + " - " + item.price}
            />
          </View>
        );
      })}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
