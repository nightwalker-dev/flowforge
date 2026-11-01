import { render, screen } from '@testing-library/react';
import App from './App';


test('renders AppLayout and Workspace', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /FlowForge/i });
  expect(headerElement).not.toBeNull();
  const workspaceTitle = screen.getByText(/Your Workflows/i);
  expect(workspaceTitle).not.toBeNull();
});
