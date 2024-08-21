import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PokeDex from './PokeDex';

test('renders PokeDex without crashing', () => {
  render(<PokeDex />);
});

test('adds a new pokemon card', async () => {
  const { getByText } = render(<PokeDex />);
  const addButton = getByText(/Catch one!/i);
  fireEvent.click(addButton);
  // Add further assertions based on mock API response
});
