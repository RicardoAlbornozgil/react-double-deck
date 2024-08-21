import { renderHook, act } from '@testing-library/react-hooks';
import useFlip from './useFlip';

test('useFlip toggles flip state', () => {
  const { result } = renderHook(() => useFlip());
  expect(result.current[0]).toBe(false);
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(true);
});

