import type { Meta, StoryObj } from '@storybook/react'
import HeroParallax from '../components/HeroParallax'

const meta: Meta<typeof HeroParallax> = {
  title: 'Components/HeroParallax',
  component: HeroParallax,
  args: {
    headline: 'Crafted for the extraordinary',
    subHeadline: 'Swiss-made precision for collectors and connoisseurs.',
    ctaText: 'Explore the collection',
    imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80'
  },
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

export const Default: StoryObj<typeof HeroParallax> = {}
