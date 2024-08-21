import { useState } from 'react';

/**
 * Custom hook to manage the flipped state of a card.
 * @param {boolean} initialState - The initial flip state of the card (default: false).
 * @returns {Array} - Array containing the flip state and a function to toggle the state.
 */
function useFlip(initialState = false) {
  const [isFlipped, setIsFlipped] = useState(initialState);

  const toggleFlip = () => {
    setIsFlipped(isFlipped => !isFlipped);
  };

  return [isFlipped, toggleFlip];
}

export default useFlip;
