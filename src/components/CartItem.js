import React from "react";
import { StyleSheet, Image } from "react-native";
import { IconButton, List } from "react-native-paper";

export default function CartItem({ item, onDispatch }) {
  // const dispatch = useDispatch();
  return (
    <List.Item
      title={item.name}
      description={item.price}
      left={() => (
        <Image
          source={require("../../assets/images/cabbage.jpg")}
          style={styles.cartImage}
        />
      )}
      right={(props) => (
        <IconButton
          icon="delete"
          color="red"
          size={20}
          onPress={onDispatch}
          {...props}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  cartImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 10,
  },
});
