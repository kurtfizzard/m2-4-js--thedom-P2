// Exercise 7
//
// Part 1 - Write
// ---------------
// Write a function that accepts an array of objects and an object as arguments
// and returns a new array with the values of original array that each include the second object.
// e.g. addValues([{name: 'chris', age: 23}, {name: 'liv', age: 36}, {name: 'dave', age: 43}], {isAvailable: true}) returns
// [
//   { name: "chris", age: 23, isAvailable: true },
//   { name: "liv", age: 36, isAvailable: true },
//   { name: "dave", age: 43, isAvailable: true },
// ]

// - If the provided key is not any of the objects, return null for that value;

// something is wrong here - no key provided

const addValues = (arr, obj) => {
  return arr.map((element) => {
    if (typeof obj === "object") {
      return { ...element, ...obj };
    }
  });
};

// Part 2 - Test
// --------------
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = addValues;
