const forTesting = require('./stringLength');
const error = 'string must be atleast 1 char and less than 11 char'

test('returns length of the string', () => {
  expect(forTesting('hello world')).toBe(11);
})

test('should throw an error if called without a char', () => {
  expect(forTesting).toThrow(error);
})

test('should throw an error if length of the string is grater than 10', () => {
  expect( () => forTesting('schwarzenegger')).toThrow(error);
})
  
