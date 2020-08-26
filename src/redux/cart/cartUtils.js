export const addItemTocart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems;
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemfromCart = (cartItems, cartItemsToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemsToRemove.id);
};
