import calculateCanvasPerimeter from "./calculateCanvasPerimeter";
import calculateCanvasSize from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  test("returns correct result for positive values", () => {
    const result = calculateCanvasPerimeter("10", "100");
    expect(result).toEqual(2*(10 + 100));
  })
});

test("should return 0 for length and width of 0", () => {
  const result = calculateCanvasPerimeter("0", "0");
  expect(result).toEqual(0);
});

test("should return NaN for invalid inputs", () => {
  const result = calculateCanvasPerimeter("invalid", "100");
  expect(result).toBeNaN();
});

test("should return NaN for empty strings", () => {
  const result = calculateCanvasPerimeter("", "");
  expect(result).toBeNaN();
});

test("should return NaN for non-numeric strings", () => {
  const result = calculateCanvasPerimeter("abc", "def");
  expect(result).toBeNaN();
});

test("should handle negative values", () => {
  const result = calculateCanvasPerimeter("-10", "-20");
  expect(result).toEqual(2 * (-10 + -20));
});

test("should handle decimal values", () => {
  const result = calculateCanvasPerimeter("10.5", "20.5");
  expect(result).toEqual(2 * (10.5 + 20.5));
});