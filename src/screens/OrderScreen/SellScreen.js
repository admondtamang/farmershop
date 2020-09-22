import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { TextInput, Button, Surface, Title } from "react-native-paper";
// import ImagePicker from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux";

export default function SellScreen() {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
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

  // const __uploadImage = (async) => {
  //   const payload = new FormData();
  //   payload.append("image", image);

  //   const config = {
  //     body: payload,
  //     method: "POST",
  //   };
  // };

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        console.log("Respult  ", result);
        const img = {
          uri: result.uri,
          type: result.type,
          name: result.name || result.uri.lastIndexOf("/") + 1,
        };
        setImage(img);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
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
    src: Yup.string(),
  });
  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Enter your product</Title>
      <Formik
        initialValues={{
          name: "dskfl",
          quantity: 10,
          weight: "kg",
          description: "klfds",
          src: "https://imgur.com/aEsf5Gj.jpg",
          type: "product",
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

            <View>
              <TextInput
                label="Add picture link..."
                mode="outlined"
                onChangeText={formik.handleChange("src")}
                value={formik.values.src}
                onBlur={formik.handleBlur("src")}
              />
              <Text style={styles.error}>
                {formik.touched.src && formik.errors.src}
              </Text>
            </View>

            {image && (
              <Surface>
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
              </Surface>
            )}

            {/* {image && (formik.values.image = image)} */}
            <Button style={{ marginVertical: 10 }} onPress={_pickImage}>
              Upload Photo
            </Button>

            <Button
              mode="contained"
              onPress={formik.handleSubmit}
              style={{ marginBottom: 50 }}
            >
              Submit
            </Button>
            <pre>{JSON.stringify(formik, null, 2)}</pre>
          </>
        )}
      </Formik>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingBottom: 0,
  },
  title: {
    color: "#3465d9",
    fontSize: 20,
    marginBottom: 10,
  },
  error: {
    color: "red",
  },
});
