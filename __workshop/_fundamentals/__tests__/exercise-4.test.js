// We import (require) the function that we want to test.
const count = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(145);
});

test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", yearsOld: 45 },
      ],
      "amount"
    )
  ).toBe(100);
});

test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", yearsOld: 10 },
        { name: "Josie", yearsOld: 9 },
      ],
      "yearsOld"
    )
  ).toBe(19);
});

test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", yearsOld: 45 },
      ],
      "toes"
    )
  ).toBe(0);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
