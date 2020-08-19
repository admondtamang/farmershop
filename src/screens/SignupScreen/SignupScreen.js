import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { Button, ActivityIndicator } from "react-native-paper";
import axios from "axios";
import StyledInput from "../../components/StyledInput";
import * as Yup from "yup";
import { Formik } from "formik";

const SignupScreen = ({ navigation }) => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    phone: Yup.string().required().max(10).min(4),
    location: Yup.string().required().max(20),
  });

  const onSubmit = async (values, actions) => {
    console.log("Email and password", values);
    try {
      const reqBody = {
        query: `
        mutation{
            createUser(userInput:{email:"${values.email}" password:"${values.password}",location:"${values.location}",phone:"${values.phone}"}){
            _id
            email
            password
          }
        }
      `,
      };

      await axios.post("http://localhost:3000/graphql", reqBody);
      actions.setSubmitting(false);
      ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
      navigation.navigate("Login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 38,
          backgroundColor: "white",
          paddingVertical: 100,
        }}
      >
        <Text style={styles.title}>SignUp</Text>
        <Text style={styles.text}>Enter valid Email and Password</Text>
        <Formik
          initialValues={{ email: "", password: "", phone: "", location: "" }}
          validationSchema={SignupSchema}
          onSubmit={onSubmit}
        >
          {(formikProps) => (
            <>
              <StyledInput
                label="Email"
                formikProps={formikProps}
                formikKey="email"
                placeholder="Email"
              />
              <StyledInput
                label="password"
                formikProps={formikProps}
                formikKey="password"
                placeholder="Password"
                secureTextEntry
              />
              <StyledInput
                label="Phone"
                formikProps={formikProps}
                formikKey="phone"
                placeholder="Phone"
              />
              <StyledInput
                label="Location"
                formikProps={formikProps}
                formikKey="location"
                placeholder="location"
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
                  <Text style={{ fontWeight: "bold", color: "#3465d9" }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
              {formikProps.isSubmitting ? (
                <ActivityIndicator />
              ) : (
                <Button
                  mode="contained"
                  style={styles.section}
                  onPress={formikProps.handleSubmit}
                >
                  Submit
                </Button>
              )}
              <pre>{JSON.stringify(formikProps, null, 2)}</pre>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
