import React from "react";
import { View, Text } from "react-native";

import { WebView } from "react-native-webview";
export default function PriceScreen() {
  return <WebView source={{ uri: "https://kalimatimarket.gov.np/" }} />;
}
