import React from "react";
import { View, Text } from "react-native";
import Products from "../../components/Products";
// import LottieView from "lottie-react-native";
import { connect } from "react-redux";
import { removeItemFromCart } from "../../redux";

const CartScreen = (props) => {
  return (
    <View>
      {props.cartItem.length > 0 ? (
        <Products products={props.cartItem} onPress={props.removeFromCart} />
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {/* <LottieView
            style={{
              width: "100%",
            }}
            source={require("../../../assets/empty_cart.json")}
            autoPlay
            loop
          /> */}
          <Text>Empty shopping cart</Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cartItem: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => {
      dispatch(removeItemFromCart(product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
