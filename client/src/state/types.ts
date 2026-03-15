/**
 * Financial Category Breakdown
 * Defines specific buckets for expense tracking used in Pie charts.
 */
export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

/**
 * Monthly Financial Snapshot
 * Used for time-series Line and Bar charts.
 */
export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

/**
 * Daily Financial Snapshot
 * Used for granular day-to-day tracking.
 */
export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

/**
 * KPI API Response Interface
 * Root object for the dashboard's analytics engine.
 * Maps directly to the KPI Mongoose model.
 */
export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

/**
 * Product API Response Interface
 * Represents individual items in the inventory.
 */
export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}

/**
 * Transaction API Response Interface
 * Represents an individual order/sale event.
 */
export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}
