const factorial = require('../factorial.js');

test('Calcula el factorial de 0', () => {
  expect(factorial(0)).toBe(1);
});

test('Calcula el factorial de 1', () => {
  expect(factorial(1)).toBe(1);
});

test('Calcula el factorial de 7', () => {
  expect(factorial(7)).toBe(5040);
});

test('Calcula el factorial de 9', () => {
  expect(factorial(9)).toBe(362880);
});