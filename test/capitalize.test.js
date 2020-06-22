import Capitalize from '../src/capitalize';

test('Capitalize a string', () => {
  expect(Capitalize('string')).toBe('String');
});

test('Capitalize the word random',() => {
  expect(Capitalize('random')).toBe('Random');
});

test('Return empty if argument is not a string',() => {
  expect(Capitalize(123)).toBe('');
});

test('Return same string if the first letter of the string is not a valid letter', () => {
  expect(Capitalize('1kdasl')).toBe('1kdasl');
});

test('Return empty string if argument is and empty string', () => {
  expect(Capitalize('')).toBe('');
});