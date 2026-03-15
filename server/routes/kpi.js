import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

/**
 * @route   GET /kpi/kpis
 * @desc    Retrieve all Key Performance Indicators including monthly and daily trends
 * @access  Public
 */
router.get("/kpis", async (req, res) => {
  try {
    // Fetches all KPI documents. 
    // Due to the embedded schema design, this single call returns all chart data.
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
