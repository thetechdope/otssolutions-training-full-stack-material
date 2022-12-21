import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Akshay Khurana/i);
  expect(linkElement).toBeInTheDocument();
});
