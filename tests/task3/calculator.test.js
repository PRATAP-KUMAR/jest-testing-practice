const Calculator = require('./calculator');

describe('Calculator', () => {
  const calc = new Calculator(2, 3);
  
  test('testing the functionalities', () => {
    expect(calc.add()).toBe(5);
  });
  
  test('testing the functionalities', () => {
    expect(calc.subtract()).toBe(-1);
  });
  
  test('testing the functionalities', () => {
    expect(calc.divide()).toBe(2/3);
  });
  
  test('testing the functionalities', () => {
    expect(calc.multiply()).toBe(6);
  });
});
