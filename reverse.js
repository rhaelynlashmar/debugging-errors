let input = process.argv[2];
// changed the order so reverse could be initialized
// original was spelt wrong and didn't match the parameter
// reverseList isn't a method
const reverse = function(original) {
  return original.split('').reverse().join('');
};
// added in squiggly brackets to ensure it behaves as a loop
if (input) {
  console.log(reverse(input));
};
// tested it with the word input to get tupni as an answer
