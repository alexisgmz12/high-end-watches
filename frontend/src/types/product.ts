export interface Product {
  /** Unique identifier for the product */
  id: string;
  /** Human‑readable name */
  name: string;
  /** Price in cents */
  price: number;
  /** URL to product image */
  imageUrl: string;
}