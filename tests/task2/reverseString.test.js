const forTesting = require('./reverseString');
const error = 'string must be atleast 1 char';

test('returns reverse word', () => {
  expect(forTesting('hello world')).toBe('dlrow olleh');
})

test('should throw an error if called without a char', () => {
  expect(forTesting).toThrow(error);
})
  
