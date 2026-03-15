import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";

/**
 * RTK Query API Slice
 * Centralized data-fetching layer with built-in caching and state management.
 * This replaces the need for manual 'useEffect' hooks and 'useState' for loading/errors.
 */
export const api = createApi({
  // Configures the base URL using Vite environment variables for security
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),

  // The unique key where Redux will store our cached data in the store
  reducerPath: "main",

  // Tags allow RTK Query to track which data needs re-fetching when mutations occur
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    /**
     * Fetches Key Performance Indicators (KPIs)
     * Provides 'Kpis' tag for automated cache invalidation
     */
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),

    /**
     * Fetches Product inventory and financial data
     * Caches result to prevent redundant API calls on page switch
     */
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),

    /**
     * Fetches recent Transactions
     * Sorted and limited by the backend, then managed by Redux state
     */
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

/**
 * Auto-generated Hooks
 * RTK Query automatically generates hooks based on the endpoint names.
 * These hooks return { data, isLoading, isError, error } for easy UI integration.
 */
export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;
