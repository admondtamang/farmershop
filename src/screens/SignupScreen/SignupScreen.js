import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const handleSubmit = async () => {
    console.log("EMail and password", email + password);
    try {
      const reqBody = {
        query: `
        mutation{
          createUser(userInput:{email:"${email}" password:"${password}",location:"${location}",phone:"${phone}"}){
            _id
            email
            password
          }
        }
      `,
      };

      await axios.post("http://localhost:3000/graphql", reqBody);
      // ToastAndroid.show("Hi I am Simple Toast", ToastAndroid.SHORT);
      navigation.navigate("Login");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>
      <Text style={styles.text}>Enter valid Email and Password</Text>

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        style={styles.section}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.section}
        label="Password"
        secureTextEntry
        mode="outlined"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <TextInput
        style={styles.section}
        label="Phone"
        mode="outlined"
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
      />
      <TextInput
        style={styles.section}
        label="Location"
        mode="outlined"
        value={location}
        onChangeText={(location) => setLocation(location)}
      />

      <View style={styles.haveAccount}>
        <Text
          style={{
            color: "gray",
          }}
        >
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontWeight: "bold", color: "#3465d9" }}>Login</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" style={styles.section} onPress={handleSubmit}>
        Submit
      </Button>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 38,
    backgroundColor: "white",
    paddingVertical: 100,
  },
  title: {
    color: "#3465d9",
    fontWeight: "bold",
    fontSize: 30,
  },
  text: {
    color: "gray",
    marginBottom: 20,
  },
  section: {
    marginTop: 10,
  },
  haveAccount: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
});
