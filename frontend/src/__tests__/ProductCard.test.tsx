import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductCard, { ProductCardProps } from '../components/ProductCard'

const mockProduct: ProductCardProps['product'] = {
  id: '1',
  name: 'Test Watch',
  price: 19999,
  imageUrl: 'https://example.com/watch.png'
}

describe('ProductCard', ()=>
  it('renders product information and format price correctly', () => {
    const { container } = render(<ProductCard product={mockProduct} />)
    expect(screen.getByRole('img', { name: 'Test Watch' })).toHaveAttribute(
      'src',
      mockProduct.imageUrl
    )
    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe(
      mockProduct.name
    )
    expect(screen.getByText('$199.99')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
)
