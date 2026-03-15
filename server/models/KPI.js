import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
// Initialize currency type to ensure financial precision across nested sub-documents
loadType(mongoose);

/**
 * Day Schema (Sub-document)
 * Captures granular financial snapshots for daily time-series charts.
 */
const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

/**
 * Month Schema (Sub-document)
 * Stores aggregated monthly data, including operational breakdowns for overhead analysis.
 */
const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

/**
 * KPI (Key Performance Indicator) Schema
 * The primary aggregator for the dashboard's financial health indicators.
 * Uses a hybrid approach of flat totals and embedded time-series arrays.
 */
const KPISchema = new Schema(
  {
    totalProfit: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    totalRevenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    // Map structure allows for dynamic keys (e.g., 'Salaries', 'Rent', 'Cloud Hosting')
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
      },
    },
    // Embedded sub-documents for fast retrieval of historical data
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

/**
 * KPI Model
 * Used to fetch all necessary data points for the dashboard in a single query.
 */
const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
