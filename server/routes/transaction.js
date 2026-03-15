import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

/**
 * @route   GET /transaction/transactions
 * @desc    Retrieve a list of recent transactions
 * @access  Public (Can be protected with middleware)
 */
router.get("/transactions", async (req, res) => {
  try {
    // Optimization: We limit the result to 50 and sort by most recent.
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;