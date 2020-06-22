import Calculator from '../src/calculator';

test('Basic add operation', () => {
  expect(Calculator.add(5, 6)).toBe(11);
});

test('Basic substract operation', () => {
  expect(Calculator.substract(10, 6)).toBe(4);
});

test('Basic substract negative operation', () => {
  expect(Calculator.substract(5, 6)).toBe(-1);
});

test('Basic multiply operation', () => {
  expect(Calculator.multiply(5, 6)).toBe(30);
});

test('Basic divide operation', () => {
  expect(Calculator.divide(5, 6)).toBe(5 / 6);
});

test('Basic divide operation by 0 is not allowed', () => {
  expect(() => Calculator.divide(6, 0)).toThrow();
});