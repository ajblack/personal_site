import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Austin Blackman on the page', () => {
  render(<App />);
  const linkElement = screen.getByText('Austin Blackman');
  expect(linkElement).toBeInTheDocument();
});
