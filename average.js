const average = function(list) {
  // the functions name is average, so we're looking for the average number of the array
  let sum = 0;
// I changed all the syntax to the most modernly used 
  for (let num of list) {
// ++ adds one to the variable- being equal to sum + 1 whereas sum = num + sum 
    sum += num;
  }

  return sum / list.length;
}
console.log(average([3, 5, 7]));