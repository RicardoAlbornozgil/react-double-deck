import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayingCardList from './PlayingCardList';

test('renders PlayingCardList without crashing', () => {
  render(<PlayingCardList />);
});

test('adds a new playing card', async () => {
  const { getByText } = render(<PlayingCardList />);
  const addButton = getByText(/Add a playing card!/i);
  fireEvent.click(addButton);
  // Add further assertions based on mock API response
});
