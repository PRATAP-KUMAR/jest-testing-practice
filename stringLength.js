const error = 'string must be atleast 1 char and less than 11 char';

function stringLength(string) {
  if(!string || string.length > 11) throw new Error (error);
  return string.length;
}

module.exports = stringLength;
