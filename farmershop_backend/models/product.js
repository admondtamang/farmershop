import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default model("Product", productSchema);
