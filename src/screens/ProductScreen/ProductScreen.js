import React from "react";
import { View, Text, Image, Dimensions, ToastAndroid } from "react-native";
import {
  Button,
  Title,
  Snackbar,
  Subheading,
  Paragraph,
} from "react-native-paper";

export default function ProductScreen({ route, navigation }) {
  const {
    params: { item, onDispatch },
  } = route;
  const [visible, setVisible] = React.useState(false);

  const onDismissSnackBar = () => setVisible(false);
  const onToggleSnackBar = () => setVisible(!visible);
  return (
    <>
      <View
        style={{
          margin: 30,
        }}
      >
        {!item.src ? (
          <ActivityIndicator />
        ) : (
          <Image
            style={{
              height: 220,
              marginBottom: 5,
              borderRadius: 10,
            }}
            source={{ uri: item.src }}
          />
        )}
        <View>
          <Title style={{ fontSize: 23 }}>{item.name}</Title>
          <Paragraph>Description of Cabbage</Paragraph>
          <Text>Rs {item.price} per kg</Text>
          <Button
            color="green"
            icon="basket"
            mode="outlined"
            style={{ marginVertical: 10 }}
            onPress={() => {
              onDispatch();
              onToggleSnackBar();
            }}
          >
            Buy
          </Button>
        </View>
        {/* seller detail */}
        <View>
          <Title>Seller Details</Title>
          <Text>Name: Hari</Text>
          <Text>Contact no: 89498165156</Text>
          <Text>Location: Balaju, Kathmadu</Text>
        </View>
      </View>
      <Snackbar visible={visible} duration={3000} onDismiss={onDismissSnackBar}>
        Added {item.name} to cart
      </Snackbar>
    </>
  );
}
