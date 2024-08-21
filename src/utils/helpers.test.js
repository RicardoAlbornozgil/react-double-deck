import { choice } from './helpers';

test('choice selects a random value from array', () => {
  const values = ['a', 'b', 'c'];
  const selected = choice(values);
  expect(values).toContain(selected);
});
