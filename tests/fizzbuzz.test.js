const fizzBuzz = require ('../fizzBuzz');
        
test('Escribe fizz', () => {
    expect(fizzBuzz.divide(3)).toMatch('Fizz');
});

test('Escribe buzz', () => {
    expect(fizzBuzz.divide(5)).toMatch('Buzz');
});

test('Escribe works', () => {
    expect(fizzBuzz.divide(15)).toMatch('FizzBuzz');
});

test('numero no divisible', () => {
    expect(fizzBuzz.divide(4)).toEqual(4);
});