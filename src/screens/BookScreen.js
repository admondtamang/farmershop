import React, { Component } from "react";
import { Text, View } from "react-native";
import Products from "../components/Products";
import { books } from "./../Data";
import { connect } from "react-redux";
const BookScreen = (props) => {
  return (
    <View>
      <Products products={books} onPress={props.addItemToCart} />
    </View>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch({ type: "ADD_TO_CART", payload: product }),
  };
};
export default connect(null, mapDispatchToProps)(BookScreen);
