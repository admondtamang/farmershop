import React, { Component } from "react";
import { Text, View } from "react-native";
import Products from "../common/Products";
import { electronics } from "./../Data";
import { connect } from "react-redux";
const ElectronicScreen = (props) => {
  return (
    <View>
      <Products products={electronics} onPress={props.addItemToCart} />
    </View>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
    },
  };
};
export default connect(null, mapDispatchToProps)(ElectronicScreen);
