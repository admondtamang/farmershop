import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  FlatList,
  Dimensions,
} from "react-native";

import MyCarousel from "../../components/Carousel";
import Search from "../../components/Search";
import Product from "../../components/Product";
import { electronics } from "../../Data";
import ItemTitle from "../../components/ItemTitle";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux";

function HomeScreen({ navigation, props }) {
  const dispatch = useDispatch();

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView style={styles.container}>
        <Search />
        <MyCarousel />

        <ItemTitle name="Vegetables" />

        <FlatList
          style={{ margin: 20 }}
          numColumns={3}
          keyExtractor={(item) => item.id.toString()}
          data={electronics}
          renderItem={({ item }) => (
            <Product
              item={item}
              onDispatch={() => dispatch(addItemToCart(item))}
            />
          )}
        />
        {/* 
        {electronics.map((item) => (
          <Product item={item} />
        ))} */}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
