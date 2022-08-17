const error = 'string must be atleast 1 char';

function reverseString(string) {
  if(!string) throw new Error (error);
  return string.split('').reverse().join('');
}

module.exports = reverseString;
