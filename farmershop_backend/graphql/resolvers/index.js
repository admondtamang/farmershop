import Product from "../../models/product";
import authResolver from "./authResolver";
const root = {
  ...authResolver,
  createProduct: async (args) => {
    try {
      const product = new Product({
        name: args.productInput.name,
        price: args.productInput.price,
        quantity: args.productInput.quantity,
        weight: args.productInput.weight,
        description: args.productInput.description,
        type: "product",
      });
      const result = await product.save();
      return result;
    } catch (err) {
      throw err;
    }
  },
};
export default root;
