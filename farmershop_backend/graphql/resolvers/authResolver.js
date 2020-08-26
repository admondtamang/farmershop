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
        userName: args.userInput.userName,
        phone: args.userInput.phone,
        email: args.userInput.email,
        location: args.userInput.location,
        password: hashedPassword,
      });
      const result = await user.save();
      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
  me: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const { location, email, phone, userName } = await User.findById(
      req.userId
    );
    return { email, location, phone, userName };
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
