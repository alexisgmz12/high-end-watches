import React from 'react'
import styles from './ProductCard.module.scss'
import type { Product } from '../types/product'

export interface ProductCardProps {
  product: Product
}

const formatPrice = (priceCents: number) => {
  const dollars = priceCents / 100
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(dollars)
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card} role="button" tabIndex={0} aria-label={product.name}>
      <div className={styles.imageWrapper}>
        <img src={product.imageUrl} alt={product.name} loading="lazy" />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{formatPrice(product.price)}</p>
      </div>
    </div>
  )
}

export default ProductCard
