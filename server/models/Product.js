import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
// Initialize currency type to ensure financial precision across all models
loadType(mongoose);

/**
 * Product Schema
 * Represents an item or service that generates revenue and incurs cost.
 * This model is central to calculating the "Profit" in your dashboard.
 */
const ProductSchema = new Schema(
  {
    // The selling price of the product
    price: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    // The cost incurred to provide/manufacture the product
    expense: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    // Two-way relationship: Link back to all transactions involving this product
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

/**
 * Product Model
 * Primary entity for inventory management and financial analysis.
 */
const Product = mongoose.model("Product", ProductSchema);

export default Product;
