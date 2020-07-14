import React from "react";
import { View } from "react-native";
import { Card, Title, Paragraph, Button, Text } from "react-native-paper";

const Product = ({ item }, props) => {
  return (
    <Card>
      <Card.Content>
        <Paragraph>{item.name}</Paragraph>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Text>Nrs {item.price}</Text>
          <Button onPress={() => props.addItemToCart(item)}>Buy</Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};

export default Product;
