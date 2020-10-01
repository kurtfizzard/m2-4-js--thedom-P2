// We import (require) the function that we want to test.
const redacted = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(redacted(["bacon", false, 42])).toStrictEqual(["redacted", false, 42]);
  expect(redacted([false, false, 42])).toStrictEqual([false, false, 42]);
  expect(redacted(["bacon", "false", "42"])).toStrictEqual([
    "redacted",
    "redacted",
    "redacted",
  ]);
  expect(redacted(["bacon", "false", 42])).toStrictEqual([
    "redacted",
    "redacted",
    42,
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
