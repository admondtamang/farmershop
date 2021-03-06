import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    location: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    createdProducts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
