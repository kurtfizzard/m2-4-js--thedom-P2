// We import (require) the function that we want to test.
const addValues = require("../exercise-7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: true },
    { name: "liv", age: 36, isAvailable: true },
    { name: "dave", age: 43, isAvailable: true },
  ]);
  expect(
    addValues(
      [
        { name: "sam", age: 15 },
        { name: "tyler", age: 16 },
      ],
      { isInSchool: false }
    )
  ).toStrictEqual([
    { name: "sam", age: 15, isInSchool: false },
    { name: "tyler", age: 16, isInSchool: false },
  ]);
  expect(addValues([{ name: "sam", age: 15 }], 6)).toStrictEqual([
    { name: "sam", age: 15 },
    { name: "tyler", age: 16 },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
