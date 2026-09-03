import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HeroParallax from '../components/HeroParallax'

// Mock IntersectionObserver for testing environments
beforeAll(() => {
  const observe = jest.fn()
  const disconnect = jest.fn()
  global.IntersectionObserver = jest.fn(() => ({ observe, disconnect, takeRecords: () => [] })) as any
})

// Create a mock image URL
const mockImage = 'https://example.com/hero.png'

describe('HeroParallax', () => {
  test('renders hero section with provided props', () => {
    render(
      <HeroParallax
        headline="Welcome"
        subHeadline="to our site"
        ctaText="Shop Now"
        imageUrl={mockImage}
      />
    )

    const headline = screen.getByRole('heading', { name: 'Welcome' })
    const subHeadline = screen.queryByRole('heading', { name: 'to our site' })
    const button = screen.getByRole('button', { name: 'Shop Now' })

    expect(headline).toBeInTheDocument()
    expect(subHeadline).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    // Use queryByRole since the section isn't given an aria-label, just ensure it exists
    const section = document.querySelector('.hero')
    expect(section).toBeInTheDocument()
    // snapshot
    const { container } = render(<HeroParallax
      headline="Welcome"
      subHeadline="to our site"
      ctaText="Shop Now"
      imageUrl={mockImage}
    />)
    // snapshot
    expect(container).toMatchSnapshot()
  })
})
