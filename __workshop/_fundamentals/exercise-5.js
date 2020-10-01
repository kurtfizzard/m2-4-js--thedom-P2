// Exercise 5
//
// Part 1 - Write
// ---------------
// Write a function accepts an indeterminate amount of numbers as arguments and returns the sum of the squares of all the numbers.
//
// - If any element is not a number, skip it.
// - If no arguments are passed, return `undefined`

const addNumbers = (...nums) => {
  // create a variable for the sum, equal to zero
  let sum = 0;
  // if no arguments are passed, return undefined
  if (nums.length === 0) {
    return undefined;
  }
  // loop over the given numbers carry out a function on each
  nums.forEach((element) => {
    // if the element is a number, add the square of that number to the sum
    if (typeof element === "number") {
      sum += element * element;
      // it is implied that if the element is not a number, it will be skipped
    } else {
      return;
    }
  });
  return sum;
};
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = addNumbers;
