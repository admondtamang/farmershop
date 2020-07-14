import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { connect, useDispatch } from "react-redux";
import { addItemToCart } from "../redux";
const Products = (props) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <FlatList
        data={props.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{ padding: 20 }}>
              <Button
                onPress={() => dispatch(addItemToCart(item))}
                title={item.name + " - " + item.price}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
