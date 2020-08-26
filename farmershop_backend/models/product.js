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
    weight: {
      type: String,
    },
    description: {
      type: String,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    type: { type: String },
  },
  { timestamps: true }
);

export default model("Product", productSchema);
