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
import { connect, useSelector, useDispatch } from "react-redux";

import MyCarousel from "../../components/Carousel";
import Search from "../../components/Search";
import Product from "../../components/Product";
import { electronics } from "../../Data";
import ItemTitle from "../../components/ItemTitle";

function HomeScreen({ navigation, props }) {
  const dispatch = useDispatch();
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView style={styles.container}>
        <Search />
        {/* <MyCarousel /> */}

        <ItemTitle name="Vegetables" />
        {/* <FlatList
          numColumns={3}
          keyExtractor={(item) => item.id.toString()}
          data={electronics}
          renderItem={Product}
          // extraData={props.addItemToCart}
        /> */}
        <Button
          title="Electronics"
          onPress={() => navigation.navigate("Electronics")}
        />
        <Button title="Books" onPress={() => navigation.navigate("Book")} />
      </ScrollView>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
    },
  };
};

export default connect(null, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
