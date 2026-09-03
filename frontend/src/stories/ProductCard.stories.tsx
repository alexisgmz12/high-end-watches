import type { Meta, StoryObj } from '@storybook/react'
import ProductCard from '../components/ProductCard'

const sampleProduct = {
  id: 'watch-1',
  name: 'Monarch Tourbillon',
  price: 245000,
  imageUrl: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=80'
}

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  args: {
    product: sampleProduct
  },
  parameters: {
    layout: 'centered'
  }
}

export default meta

export const Default: StoryObj<typeof ProductCard> = {}
