import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AWS certification questions', () => {
  render(<App />);
  const titleElement = screen.getByText(/Exemplos de Perguntas Oficiais AWS/i);
  expect(titleElement).toBeInTheDocument();
});
