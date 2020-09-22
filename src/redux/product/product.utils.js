export const addProductToArray = (existingProduct, productsToAdd) => {
  console.log(existingProduct);
  console.log(productsToAdd);
  return [...existingProduct, productsToAdd];
};
