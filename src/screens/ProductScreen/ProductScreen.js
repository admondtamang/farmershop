import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Button, Title, Snackbar } from "react-native-paper";

export default function ProductScreen({ route, navigation }) {
  const {
    params: { item, onDispatch },
  } = route;
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  return (
    <View
      style={{
        margin: 30,
      }}
    >
      <Image
        style={{
          height: 220,
          marginBottom: 5,
          borderRadius: 10,
        }}
        source={require("../../../assets/images/" + item.src)}
      />
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>{item.name}</Text>
        <Text>Description of Cabbage</Text>
        <Text>Rs {item.price} per kg</Text>
        <Button
          color="green"
          icon="basket"
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
      </View>
      <Snackbar visible={visible} duration="1000">
        Added {item.name} to cart
      </Snackbar>
    </View>
  );
}
