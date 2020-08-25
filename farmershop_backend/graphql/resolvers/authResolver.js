import bcrypt from "bcryptjs";
import User from "../../models/user";
import jwt from "jsonwebtoken";

export default {
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
  me: async (args, req) => {
    console.log(req);
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const { location, email, phone } = await User.findById(req.userId);
    return { email, location, phone };
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
