import React from 'react';
import { render } from '@testing-library/react';
import CardTable from './CardTable';

test('renders CardTable without crashing', () => {
  render(<CardTable />);
});

test('displays correct heading', () => {
  const { getByText } = render(<CardTable />);
  expect(getByText(/Check out all my cards/i)).toBeInTheDocument();
});
