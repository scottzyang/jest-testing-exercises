const {
  isFizzy,
  isBuzzy,
  fizzyBuzzy,
  fizzBuzz,
  FIZZ,
  BUZZ,
  FIZZBUZZ,
} = require("../fizzbuzz");

test("isFizzy returns true if divisible by 3", () => {
  expect(isFizzy(3)).toBe(true);
  expect(isFizzy(3)).toBe(true);
});

test("isFizzy returns false if not divisible by 3", () => {
  expect(isFizzy(2)).toBe(false);
  expect(isFizzy(-3)).toBe(true);
});

test("isBuzzy only returns true for values divisibly by 5", () => {
  const input = [5, 10, 2];
  const expectedOutput = [true, true, false];
  const actualOutput = input.map(isBuzzy);
  expect(actualOutput).toEqual(expectedOutput);
});

test("fizzybuzzy returns empty string values if not fizzy or buzzy", () => {
  const input = [1, 6, 10, 30, 31];
  const expectedOutput = ["", FIZZ, BUZZ, FIZZ + BUZZ, ""];
  const actualOutput = input.map(fizzyBuzzy);
  expect(actualOutput).toEqual(expectedOutput);
});

test("fizzBuzz counts correctly for small ranges", () => {
  let result = fizzBuzz(15);
  expect(result).toEqual({
    count: 15,
    fizz: 4,
    buzz: 2,
    fizzBuzz: 1,
  });
});

test("fizzBuzz counts correctly for larger ranges", () => {
  let result = fizzBuzz(30);
  expect(result).toEqual({
    count: 30,
    fizz: 8, // 3, 6, 9, 12, 18, 21, 24, 27
    buzz: 4, // 5, 10, 20, 25
    fizzBuzz: 2, // 15, 30
  });
});

test("fizzBuzz counts correctly for zero range", () => {
  let result = fizzBuzz(0);
  expect(result).toEqual({
    count: 0,
    fizz: 0,
    buzz: 0,
    fizzBuzz: 0,
  });
});

test("fizzBuzz counts correctly for range with no fizz or buzz", () => {
  let result = fizzBuzz(2);
  expect(result).toEqual({
    count: 2,
    fizz: 0,
    buzz: 0,
    fizzBuzz: 0,
  });
});
