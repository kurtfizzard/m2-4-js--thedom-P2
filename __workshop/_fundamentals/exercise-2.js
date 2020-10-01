// Exercise 2
//
// Part 1 - Write
// ---------------
// Write a function that accepts an array of values and returns a new array of values with all of the strings replaced with the word "redacted" (each value is replaced by the word 'redacted').
// Do not redact values that are not strings.
//
// e.g. redacted(["bacon", false, 42]) returns [ 'redacted', false, 42 ]
//

const redacted = (arr) => {
  // return a new array made up of elements from the original
  // loop over the original array and if an element is a string, it instead returns "redacted"
  return arr.map((element) => {
    if (typeof element === "string") {
      return "redacted";
      // if the element is not a string it returns the original element, unaltered
    } else {
      return element;
    }
  });
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = redacted;
