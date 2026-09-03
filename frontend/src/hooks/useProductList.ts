import { useContext, useEffect, useState } from 'react'
import type { Product } from '../types/product'
import { ProductContext } from '../context/ProductContext'
// idb-keyval exposes `get` and `set` functions for IndexedDB storage.
import { get, set } from 'idb-keyval'

/**
 * Hooks & utilities for fetching and caching product data.
 */

const CACHE_KEY = 'product-list'

/**
 * Exponential back‑off retry helper.
 */
async function retry<T>(fn: () => Promise<T>, attempts = 3, delay = 500): Promise<T> {
  try {
    return await fn()
  } catch (e) {
    if (attempts <= 1) throw e
    await new Promise(r => setTimeout(r, delay))
    return retry(fn, attempts - 1, delay * 2)
  }
}

export function useProductList() {
  const { setProducts, setLoading, setError } = useContext(ProductContext)
  const [initialLoad, setInitialLoad] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const data = await retry(() => fetch('/api/products').then(r => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`)
          return r.json() as Promise<Product[]>
        }))
        setProducts(data)
        setError(null)
        await set(CACHE_KEY, data)
      } catch (e) {
        setError((e as Error).message)
        const cached = await get<Product[]>(CACHE_KEY)
        if (cached) setProducts(cached)
      } finally {
        setLoading(false)
        if (initialLoad) setInitialLoad(false)
      }
    }
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { initialLoad }
}
