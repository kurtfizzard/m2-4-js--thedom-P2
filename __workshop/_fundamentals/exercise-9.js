// Exercise 9
// -------------
//
// Write a function that accepts a string and returns the string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after
// every 40 characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

const wrapAfter40Chars = (paragraph) => {
  // create a variable for the new string
  let result = "";
  // split the original string into an array
  let array = paragraph.split("");
  // loop over each character of the array and carry out the following function on each
  array.forEach((character, index) => {
    if (
      result.charAt(result.length - 1) === "\n" && // and it occurs after a "\n"
      character === " " // and the character is a space
    ) {
      return; // skip this character
    }
    result += character; // add character to string
    // index stars at 0, hence + 1
    if (index !== 0 && (index + 1) % 40 === 0) {
      // if you're at 40 characters in length, add \n
      result += "\n";
    }
  });
  // return the new string
  return result;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
