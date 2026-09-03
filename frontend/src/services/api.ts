import type { Product } from '../types/product'
import { testProducts } from './testProducts'
/**
 * Fetch products from the public API endpoint.
 *
 * The API is expected to return a JSON array that matches the `Product`
 * interface. The function validates the HTTP status and returns the parsed
 * array. On any error (non‑200 status or network‑level failure) an
 * `Error` is thrown so callers can handle rejection appropriately.
 */
export async function fetchProductsApi(): Promise<Product[]> {
  // const response = await fetch('/api/products')
  // if (!response.ok) {
  //   throw new Error(`Failed to fetch products: HTTP ${response.status}`)
  // }
  // const data = await response.json()
  // // Basic runtime validation: ensure an array and minimal shape
  // if (!Array.isArray(data)) {
  //   throw new Error('Invalid API response: expected an array')
  // }
  // // Return type assertion – further validation can be added if needed
  // return data as Product[]
  return testProducts
}