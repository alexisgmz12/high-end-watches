import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../components/Footer'

describe('Footer', ()=> {
  it('renders navigation links and copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('navigation', { name: /Footer navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    const copyText = screen.getByText(/High-End Watches/)
    expect(copyText).toBeInTheDocument()
    expect(document.body).toMatchSnapshot()
  })
})
