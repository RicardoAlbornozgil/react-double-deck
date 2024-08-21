import { renderHook, act } from '@testing-library/react-hooks';
import useAxios from './useAxios'


test('useAxios fetches data', async () => {
    const mockData = { data: { cards: [{ code: 'AS', image: 'some-url' }] } };
    global.axios = jest.fn().mockResolvedValue(mockData);
    
    const { result, waitForNextUpdate } = renderHook(() => useAxios('https://deckofcardsapi.com/api/deck/new/draw/'));
    act(() => {
      result.current[1]();
    });
    await waitForNextUpdate();
    expect(result.current[0]).toHaveLength(1);
    expect(result.current[0][0].code).toBe('AS');
  });