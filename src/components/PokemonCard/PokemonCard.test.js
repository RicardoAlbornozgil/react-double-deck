import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PokemonCard from './PokemonCard';

test('renders PokemonCard without crashing', () => {
  render(<PokemonCard front="front.png" back="back.png" name="Pikachu" stats={[]} />);
});

test('flips the pokemon card on click', () => {
  const { getByAltText } = render(<PokemonCard front="front.png" back="back.png" name="Pikachu" stats={[]} />);
  const card = getByAltText(/Pikachu front/i);
  fireEvent.click(card);
  expect(card.src).toContain('back.png');
  fireEvent.click(card);
  expect(card.src).toContain('front.png');
});
