import type { Meta, StoryObj } from '@storybook/react'
import ProductList from '../components/ProductList'
import { ProductContext } from '../context/ProductContext'

const sampleProducts = [
  {
    id: 'watch-1',
    name: 'Monarch Tourbillon',
    price: 245000,
    imageUrl: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'watch-2',
    name: 'Aster Chronograph',
    price: 189000,
    imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'watch-3',
    name: 'Vanta Automatic',
    price: 142500,
    imageUrl: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=80'
  }
]

const meta: Meta<typeof ProductList> = {
  title: 'Components/ProductList',
  component: ProductList,
  decorators: [
    (Story) => (
      <ProductContext.Provider value={{
        products: sampleProducts,
        loading: false,
        error: null,
        setProducts: () => {},
        setLoading: () => {},
        setError: () => {}
      }}>
        <Story />
      </ProductContext.Provider>
    )
  ],
  parameters: {
    layout: 'padded'
  }
}

export default meta

export const Default: StoryObj<typeof ProductList> = {}

export const Loading: StoryObj<typeof ProductList> = {
  decorators: [
    (Story) => (
      <ProductContext.Provider value={{
        products: [],
        loading: true,
        error: null,
        setProducts: () => {},
        setLoading: () => {},
        setError: () => {}
      }}>
        <Story />
      </ProductContext.Provider>
    )
  ]
}
