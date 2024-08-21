import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PokemonSelect from './PokemonSelect';

test('renders PokemonSelect without crashing', () => {
  render(<PokemonSelect add={() => {}} />);
});

test('selects a pokemon and adds it', () => {
  const { getByText, getByRole } = render(<PokemonSelect add={() => {}} />);
  const select = getByRole('combobox');
  fireEvent.change(select, { target: { value: '1' } });
  const addButton = getByText(/Catch one!/i);
  fireEvent.click(addButton);
  // Add further assertions based on expected behavior
});
