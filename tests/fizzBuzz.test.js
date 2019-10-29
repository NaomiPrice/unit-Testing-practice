const fizzBuzz = require('../modules/fizzBuzz');
const leapYear = require('../modules/leapYear');
// FizzBuzz tests
test('number is divisible by 3 and 5 returns FizzBuzz', ()=>{
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});

test('number is divisible by 3 returns Fizz', ()=>{
    expect(fizzBuzz(21)).toBe('Fizz');
});

test('number is divisible by 5 returns Buzz', ()=>{
    expect(fizzBuzz(20)).toBe('Buzz');
});

test('number is not divisible by 3 or 5 returns number', ()=>{
    expect(fizzBuzz(7)).toBe(7);
});

//LeapYear Testing
test('year is divisible by 400 returns true', ()=>{
    expect(leapYear(800)).toBe(true);
});

test('year is divisible by 100 returns false', ()=>{
    expect(leapYear(2100)).toBe(false);
});

test('year is divisible by 4 returns true', ()=>{
    expect(leapYear(2016)).toBe(true);
});

test('year is not divisible by 4 returns false', ()=>{
    expect(leapYear(2019)).toBe(false);
});