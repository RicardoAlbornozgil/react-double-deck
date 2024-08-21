import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayingCard from './PlayingCard';

test('renders PlayingCard without crashing', () => {
  render(<PlayingCard front="front.png" back="back.png" />);
});

test('flips the card on click', () => {
  const { getByAltText } = render(<PlayingCard front="front.png" back="back.png" />);
  const card = getByAltText(/playing card/i);
  fireEvent.click(card);
  expect(card.src).toContain('back.png');
  fireEvent.click(card);
  expect(card.src).toContain('front.png');
});
