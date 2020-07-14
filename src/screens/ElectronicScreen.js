import React, { Component } from "react";
import { Text, View } from "react-native";
import Products from "../components/Products";
import { electronics } from "./../Data";
import { connect, useDispatch } from "react-redux";
import { addItemToCart } from "../redux";
// import { AdMobBanner } from "expo-ads-admob";
const ElectronicScreen = (props) => {
  const dispatch = useDispatch();
  return (
    <View>
      {/* <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-9997613154929108/9380969999" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={bannerError}
      /> */}

      <Products products={electronics} />
    </View>
  );
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItemToCart: (product) => {
//       dispatch({ type: "ADD_TO_CART", payload: product });
//     },
//   };
// };
// export default connect(null, mapDispatchToProps)(ElectronicScreen);

export default ElectronicScreen;
