/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header component', () => {
  test('renders logo with alt text', () => {
    render(<Header />);
    const logo = screen.getByAltText(/High‑End Watches logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('has navigation links', () => {
    render(<Header />);
    const home = screen.getByRole('link', { name: /home/i });
    const products = screen.getByRole('link', { name: /products/i });
    const about = screen.getByRole('link', { name: /about/i });
    const contact = screen.getByRole('link', { name: /contact/i });
    expect(home).toBeInTheDocument();
    expect(products).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });
});