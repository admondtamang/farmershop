import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";

import MyCarousel from "../../components/Carousel";
import Search from "../../components/Search";
import Product from "../../components/Product";
import { electronics } from "../../Data";
import ItemTitle from "../../components/ItemTitle";
import DemandProductList from "../../components/DemandProductList";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux";
import { Snackbar } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const WIDTH = Dimensions.get("window").width;
  const numColumns = 3;
  const [visible, setVisible] = React.useState(false);

  const onDismissSnackBar = () => setVisible(false);
  const onToggleSnackBar = () => setVisible(!visible);
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
          productHeight={WIDTH / numColumns}
          onToggleSnackBar={onToggleSnackBar}
          navigation={navigation}
          item={item}
          onDispatch={() => dispatch(addItemToCart(item))}
        />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={formatData(electronics, numColumns)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <>
            <Search />
            <MyCarousel />

            <ItemTitle name="Vegetables" />
          </>
        }
        numColumns={numColumns}
      />
      <ItemTitle name="Demand Vegetables" />
      <DemandProductList />
      <Snackbar visible={visible} duration={3000} onDismiss={onDismissSnackBar}>
        Added to cart
      </Snackbar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
  },
});
