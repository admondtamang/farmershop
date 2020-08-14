import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
// import ImagePicker from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Formik } from "formik";
export default function SellScreen() {
  const handleSubmit = () => {};
  const [image, setImage] = useState(null);

  useEffect(() => {
    getPermissionAsync();
  }, []);
  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
        // this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your product</Text>
      <Formik
        initialValues={{
          name: "",
          quality: 0,
          weight: "",
          description: "",
          image: "",
        }}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <>
            <View>
              <TextInput
                label="Product name"
                mode="outlined"
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

            {image && (
              <Image
                source={image}
                style={{
                  width: 200,
                  height: 200,
                  flex: 1,
                  justifyContent: "center",
                  marginVertical: 20,
                }}
              />
            )}
            <Button style={{ marginVertical: 10 }} onPress={_pickImage}>
              Upload Photo
            </Button>

            <Button mode="contained" onPress={handleSubmit}>
              Submit
            </Button>
          </>
        )}
      </Formik>
    </View>
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
});
