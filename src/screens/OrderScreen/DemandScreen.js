import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
// import ImagePicker from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Formik } from "formik";
import * as Yup from "yup";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux";

import { Snackbar } from "react-native-paper";
export default function DemandScreen() {
  const [visible, setVisible] = React.useState(false);

  const onDismissSnackBar = () => setVisible(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    try {
      // const reqBody = {
      //   query: `
      // query{
      //   login(email:"${values.email}",password:"${values.password}"){
      //     token,userId
      //   }
      // }
      // `,
      // };

      // const {
      //   data: {
      //     data: {
      //       login: { token },
      //     },
      //   },
      // } = await axios.post("http://localhost:3000/graphql", reqBody);
      dispatch(addProduct(values));
      onToggleSnackBar();
      console.log(values);
    } catch (e) {
      console.log(e);
    }
  };
  const productSchema = Yup.object().shape({
    name: Yup.string().required(),
    quantity: Yup.number().required(),
    weight: Yup.string().required(),
    description: Yup.string().required(),
  });
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Product you desire</Text>
        <Formik
          initialValues={{
            name: "",
            quantity: "",
            weight: "",
            description: "",
            type: "",
          }}
          validationSchema={productSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <>
              <View>
                <TextInput
                  label="Product name"
                  mode="outlined"
                  name="name"
                  onChangeText={formik.handleChange("name")}
                  value={formik.values.name}
                  onBlur={formik.handleBlur("name")}
                />
                <Text style={styles.error}>
                  {formik.touched.name && formik.errors.name}
                </Text>
              </View>
              <View>
                <TextInput
                  label="Quantity"
                  mode="outlined"
                  name="quantity"
                  onChangeText={formik.handleChange("quantity")}
                  value={formik.values.quantity}
                  onBlur={formik.handleBlur("quantity")}
                />
                <Text style={styles.error}>
                  {formik.touched.quantity && formik.errors.quantity}
                </Text>
              </View>
              <View>
                <TextInput
                  label="Weight (kg, gram ...)"
                  mode="outlined"
                  onChangeText={formik.handleChange("weight")}
                  value={formik.values.weight}
                  onBlur={formik.handleBlur("weight")}
                />
                <Text style={styles.error}>
                  {formik.touched.weight && formik.errors.weight}
                </Text>
              </View>

              <View>
                <TextInput
                  label="Description"
                  mode="outlined"
                  onChangeText={formik.handleChange("description")}
                  value={formik.values.description}
                  onBlur={formik.handleBlur("description")}
                  multiline
                />
                <Text style={styles.error}>
                  {formik.touched.description && formik.errors.description}
                </Text>
              </View>

              <Button mode="contained" onPress={formik.handleSubmit}>
                Submit
              </Button>
              {/* <pre>{JSON.stringify(formik, null, 2)}</pre> */}
            </>
          )}
        </Formik>
      </ScrollView>
      <Snackbar visible={visible} duration={3000} onDismiss={onDismissSnackBar}>
        Demand added sucessfully
      </Snackbar>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    color: "#3465d9",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  error: {
    color: "red",
  },
});
