const forTesting = require('./capitalize');

test('test for Capitalization', () => {
  expect(forTesting('hello world!')).toBe('Hello world!');
})
