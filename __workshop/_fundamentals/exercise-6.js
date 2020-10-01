// Exercise 6
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string as an argument and returns true if
// the string is a palindrome and false otherwise.
//
// - If the argument received is not a string, return undefined.
//
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function isPalindrome(theString) {
  // if the argument is a string, carry out the following function
  if (typeof theString === "string") {
    // create a new variable or the reversed string
    //it is equal to the original string that is split into an array, reversed in order and joined back into a string
    let reversedString = theString.split("").reverse().join("");
    // if theString is equal to reversedString return true
    if (theString === reversedString) {
      return true;
      // if not, return false
    } else {
      return false;
    }
    // if the argument is not a string, it will return undefined by default
  }
}
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = isPalindrome;
