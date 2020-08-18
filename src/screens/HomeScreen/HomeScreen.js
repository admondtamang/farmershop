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
import { Surface } from "react-native-paper";

function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const WIDTH = Dimensions.get("window").width;
  const numColumns = 3;

  const formatData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns);
    let totalLasttRow = dataList.length - totalRows * numColumns;
    while (totalLasttRow !== 0 && totalLasttRow !== numColumns) {
      dataList.push({ name: "blank", empty: true });
      totalLasttRow++;
    }
    return dataList;
  };

  const renderItem = ({ item }) => {
    if (item.empty) {
      return (
        <View
          style={[styles.productContainer, { backgroundColor: "transparent" }]}
        />
      );
    }
    return (
      <View style={styles.productContainer}>
        <Product
          styled={{ height: WIDTH / numColumns }}
          navigation={navigation}
          item={item}
          onDispatch={() => dispatch(addItemToCart(item))}
        />
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView style={styles.container}>
        <Search />
        <MyCarousel />

        <ItemTitle name="Vegetables" />

        <FlatList
          style={{ margin: 20 }}
          data={formatData(electronics, numColumns)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          numColumns={numColumns}
        />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
