import Analyze from '../src/arrayAnalysis'

test('Analyze an array', () => {
  expect(Analyze([1, 8, 3, 4, 2, 6])).toEqual({
    "average": 4,
    "min": 1,
    "max": 8,
    "length": 6});
});

test('Analyze an string array', () => {
  expect(() => Analyze(['2', 2, 6])).toThrow();
});

test('Analyze an empty array', () => {
  expect(() => Analyze([])).toThrow();
});