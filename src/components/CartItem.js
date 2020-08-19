import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text, IconButton, List } from "react-native-paper";

export default function CartItem({ item, onDispatch }) {
  // const dispatch = useDispatch();
  return (
    <List.Item
      style={styles.cartItemContainer}
      title={item.name}
      description={item.price}
      left={() => (
        <Image
          source={require(`../../assets/images/${item.src}`)}
          style={styles.cartImage}
        />
      )}
      right={() => (
        <IconButton icon="delete" color="red" size={20} onPress={onDispatch} />
      )}
    />

    // <View style={styles.cartItemContainer}>
    //   <Image
    //     source={require(`../../assets/images/${item.src}`)}
    //     style={styles.cartImage}
    //   />
    //   <View>
    //     <Text>{item.name}</Text>
    //     <Text>Nrs {item.price}</Text>
    //     <IconButton icon="delete" color="red" size={20} onPress={onDispatch} />
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  cartItemContainer: {
    flex: 1,
    flexDirection: "row",
  },
  cartImage: {
    width: 40,
    height: 40,
    marginBottom: 5,
    borderRadius: 10,
  },
});
