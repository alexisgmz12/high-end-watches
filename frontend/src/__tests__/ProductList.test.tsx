import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductList from '../components/ProductList'
import { ProductProvider, ProductContext } from '../context/ProductContext'

// Mock global fetch to return deterministic product data
beforeAll(() => {
  global.fetch = jest.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { id: '1', name: 'Watch A', price: 10000, imageUrl: '/a.png' },
      { id: '2', name: 'Watch B', price: 20000, imageUrl: '/b.png' }
    ])
  })) as any
})

// Stubbed products
const products = [
  { id: '1', name: 'Watch A', price: 10000, imageUrl: '/a.png' },
  { id: '2', name: 'Watch B', price: 20000, imageUrl: '/b.png' }
]

// Render the component by using the Provider component directly. We're mocking fetch globally so the context will populate with deterministic data.
const renderWithProvider = (component: React.ReactElement) => {
  const value = {
    products,
    loading: false,
    error: null,
    setProducts: () => {},
    setLoading: () => {},
    setError: () => {},
  }
  return render(
    <ProductContext.Provider value={value}>
      {component}
    </ProductContext.Provider>
  )
}

describe('ProductList', ()=> {
  it('renders a list of ProductCard items', () => {
      renderWithProvider(<ProductList />)
    const cards = screen.getAllByRole('button')
    expect(cards).toHaveLength(2)
    expect(screen.getByText('Watch A')).toBeInTheDocument()
    expect(screen.getByText('Watch B')).toBeInTheDocument()
    // snapshot
    expect(document.body).toMatchSnapshot()
  })
})
