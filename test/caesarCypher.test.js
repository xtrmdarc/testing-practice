import CaesarCypher from '../src/caesarCypher';

test('Test wrapping from a to z', () => {
  expect(CaesarCypher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('Test encryption with spaces', () => {
  expect(CaesarCypher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('Test encryption with punctuation', () => {
  expect(CaesarCypher('defend?', 1)).toBe('efgfoe?');
});

test('Test encryption with same case', () => {
  expect(CaesarCypher('DEFend?', 1)).toBe('EFGfoe?');
});

test('Test encryption with different shifts', () => {
  expect(CaesarCypher('defend', 2)).toBe('fghgpf');
});