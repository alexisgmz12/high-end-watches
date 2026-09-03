import React, { useContext } from 'react'
import styles from './ProductList.module.scss'
import type { Product } from '../types/product'
import { ProductContext } from '../context/ProductContext'
import ProductCard from './ProductCard'

const ProductList: React.FC = () => {
  const { products, loading } = useContext(ProductContext)

  if (loading) {
    return <div className={styles.shimmer} />
  }

  return (
    <div className={styles.grid}>
      {products.map((p: Product) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

export default ProductList
