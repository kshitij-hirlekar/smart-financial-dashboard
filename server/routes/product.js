import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

/**
 * @route   GET /product/products
 * @desc    Retrieve all products with currency conversion
 * @access  Public
 */
router.get("/products", async (req, res) => {
  try {
    // Fetches all products. Since 'getters' are enabled in the model, 
    // currency will automatically convert from cents to dollars.
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
