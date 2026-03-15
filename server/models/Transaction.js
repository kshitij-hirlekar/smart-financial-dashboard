import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
// Initialize currency type to handle financial precision (stores as cents)
loadType(mongoose);

/**
 * Transaction Schema
 * Represents a financial exchange between a buyer and products.
 * Includes automatic timestamps for audit trails.
 */
const TransactionSchema = new Schema(
  {
    // The name or ID of the user performing the purchase
    buyer: {
      type: String,
      required: true,
    },
    // Financial amount stored using mongoose-currency for high precision
    amount: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    // Reference array to link this transaction to specific products
    // This allows for 'Populated' queries to see item details
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  // Automatically creates 'createdAt' and 'updatedAt' fields
  { timestamps: true, toJSON: { getters: true } }
);

/**
 * Transaction Model
 * Used to perform CRUD operations on the 'transactions' collection in MongoDB.
 */
const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
