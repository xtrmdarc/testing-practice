import ReverseString from '../src/reverseString'

test('Reverse a string', () => {
  expect(ReverseString('string')).toBe('gnirts');
});

test('Reverse a string number', () => {
  expect(ReverseString('123')).toBe('321');
});

test("Don't reverse if there's no string", () => {
  expect(ReverseString(' ')).toBe(' ');
});

test("Don't reverse if there's no string", () => {
  expect(ReverseString('')).toBe('');
});