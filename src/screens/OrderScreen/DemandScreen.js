import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function DemandScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter valid Email and Password</Text>
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.section}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.section}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.section}
        onChangeText={(email) => setEmail(email)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
