import { useState, useEffect } from 'react';

/**
 * Custom hook that syncs state with localStorage.
 * @param {string} key - The key to store the value under in localStorage.
 * @param {*} initialValue - The initial value to use if no value is found in localStorage.
 * @returns {[any, function]} - The state value and a function to update it.
 */
function useLocalStorage(key, initialValue) {
  // Get the value from localStorage or use the initial value if not found.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  // Update localStorage whenever the state changes.
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
