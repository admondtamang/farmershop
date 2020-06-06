import React from "react";
import { View, Text } from "react-native";
import Products from "../../common/Products";
import { connect } from "react-redux";

const CartScreen = (props) => {
  return (
    <View>
      {props.cartItem.length > 0 ? (
        <Products products={props.cartItem} onPress={props.removeFromCart} />
      ) : (
        <Text>No items in your cart</Text>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  console.log("-----------------------");
  return {
    cartItem: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
