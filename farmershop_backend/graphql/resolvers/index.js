import bcrypt from "bcryptjs";
import User from "../../models/user";
import Product from "../../models/product";
import jwt from "jsonwebtoken";
const root = {
  createUser: async (args) => {
    try {
      const exitstingUser = await User.findOne({ email: args.userInput.email });
      if (exitstingUser) {
        throw new Error("User exists already.");
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
      const user = new User({
        firstName: args.userInput.firstName,
        lastName: args.userInput.lastName,
        email: args.userInput.email,
        password: hashedPassword,
      });
      const result = await user.save();
      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
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
  me: async (req) => {
    console.log(req);
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const user = User.findById(req.userId);
    console.log(user);
    return { email };
    next();
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User does not exist");
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error("Password incorrect");
    }

    const token = jwt.sign({ userId: user.id }, process.env.SECRET);
    return { userId: user.id, token: token };
  },
};
export default root;
