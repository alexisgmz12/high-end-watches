import React, { createContext, useContext, useEffect, useState, PropsWithChildren } from "react"
import type { Product } from "../types/product"
import { fetchProductsApi } from "../services/api"

// Define the shape of the context data
export type ProductContextValue = {
  products: Product[]
  loading: boolean
  error: string | null
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<string | null>>
}

// Default value – should never be used by consumers directly
const defaultContext: ProductContextValue = {
  products: [],
  loading: false,
  error: null,
  setProducts: () => {},
  setLoading: () => {},
  setError: () => {},
}

export const ProductContext = createContext<ProductContextValue>(defaultContext)

export const ProductProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const res = await fetch("/api/products")
        const data = await fetchProductsApi()
        // if (!res.ok) throw new Error(`HTTP ${res.status}`)
        // const data = (await res.json()) as Product[]
        setProducts(data)
        setError(null)
      } catch (e) {
        setError((e as Error).message)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products, loading, error, setProducts, setLoading, setError }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext)
