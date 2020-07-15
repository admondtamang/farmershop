import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import Product from "../../components/Product";
// import LottieView from "lottie-react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../redux";

export default function CartScreen(props) {
  const cartItem = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <View>
      {console.log("cart item", cartItem)}
      {cartItem.length > 0 ? (
        <FlatList
          style={{ margin: 20 }}
          numColumns={3}
          keyExtractor={(item) => item.id.toString()}
          data={cartItem}
          renderItem={({ item }) => (
            <Product
              item={item}
              onDispatch={() => {
                dispatch(removeItemFromCart(item));
              }}
            />
          )}
        />
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
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     cartItem: state,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromCart: dispatch(removeItemFromCart(product)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
