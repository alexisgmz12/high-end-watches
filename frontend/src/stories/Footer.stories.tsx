import type { Meta, StoryObj } from '@storybook/react'
import Footer from '../components/Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

export const Default: StoryObj<typeof Footer> = {}
