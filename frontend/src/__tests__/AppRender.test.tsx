import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App rendering', () => {
  test('renders Hello World', () => {
    render(<App />);
    const hello = screen.getByText(/Hello World/i);
    expect(hello).toBeInTheDocument();
  });
});