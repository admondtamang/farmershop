import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Formik } from "formik";
import axios from "axios";
import { Button } from "react-native-paper";
import { SignupScreen } from "../SignupScreen";
import * as Yup from "yup";

export default function LoginScreen({ navigation }) {
  const [borderColor, setBorderColor] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          navigation.navigate("Home");
          console.log("token is here", value);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getToken();
  }, []);

  const onFocusInput = (value) => {
    setBorderColor(value);
  };

  const onSubmit = async (values) => {
    try {
      const reqBody = {
        query: `
      query{
        login(email:"${values.email}",password:"${values.password}"){
          token,userId
        }
      }
      `,
      };

      const {
        data: {
          data: {
            login: { token },
          },
        },
      } = await axios.post("http://localhost:3000/graphql", reqBody);
      setIsLoggedIn(!isLoggedIn);
      await AsyncStorage.setItem("token", token);
    } catch (e) {
      console.log(e);
    }
  };
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  if (isLoggedIn) navigation.navigate("Home");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.text}>Login with Email and Password</Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <>
            <View style={styles.action}>
              <View
                style={[
                  styles.section,
                  {
                    borderColor: borderColor == "email" ? "#3465d9" : "gray",
                  },
                ]}
              >
                <MaterialIcons
                  name="email"
                  size={20}
                  color={borderColor == "email" ? "#3465d9" : "gray"}
                />
                <TextInput
                  placeholder="Email"
                  style={[
                    styles.TextInput,
                    {
                      color: borderColor == "email" ? "#3465d9" : "gray",
                    },
                  ]}
                  onChangeText={formik.handleChange("email")}
                  value={formik.values.email}
                  onBlur={formik.handleBlur("email")}
                  onFocus={() => onFocusInput("email")}
                />
                <Text style={styles.error}>
                  {formik.touched.email && formik.errors.email}
                </Text>
              </View>
            </View>

            <View style={styles.action}>
              <View
                style={[
                  styles.section,
                  {
                    borderColor: borderColor == "password" ? "#3465d9" : "gray",
                  },
                ]}
              >
                <MaterialIcons
                  name="lock-outline"
                  size={20}
                  color={borderColor == "password" ? "#3465d9" : "gray"}
                />
                <TextInput
                  placeholder="Password"
                  value={formik.values.password}
                  onChangeText={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  style={[
                    styles.TextInput,
                    {
                      color: borderColor == "password" ? "#3465d9" : "gray",
                    },
                  ]}
                  onFocus={() => onFocusInput("password")}
                  secureTextEntry
                />
                <Text style={styles.error}>
                  {formik.touched.password && formik.errors.password}
                </Text>
              </View>
            </View>

            <Text style={styles.forgot}>Forgot Password?</Text>

            <Button mode="contained" onPress={formik.handleSubmit}>
              Login
            </Button>
          </>
        )}
      </Formik>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={[
            styles.textSignUp,
            {
              color: "gray",
            },
          ]}
        >
          Don't have an account?{" "}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={{ alignSelf: "stretch", alignItems: "center" }}
        >
          <Text style={{ fontWeight: "bold", color: "#3465d9" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 10,
  },
  action: {},
  TextInput: {
    flex: 1,
    paddingLeft: 10,
  },
  forgot: {
    textAlign: "right",
    marginTop: 15,
    color: "gray",
  },
  login: {
    width: "100%",
    height: 40,
    backgroundColor: "#3465d9",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 5,
  },
  textLogin: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  error: { color: "red" },
});
