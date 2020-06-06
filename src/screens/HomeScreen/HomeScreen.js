import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Fontisto } from "@expo/vector-icons";

function HomeScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Update count" />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button
        title="Electronics"
        onPress={() => navigation.navigate("Electronics")}
      />
      <Button title="Books" onPress={() => navigation.navigate("Book")} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
