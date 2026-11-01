import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/FlowForge/i);
  expect(headerElement).not.toBeNull();
});
