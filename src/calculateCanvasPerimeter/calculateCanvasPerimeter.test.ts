import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  test("returns correct result for positive values", () => {
    const result = calculateCanvasPerimeter("10", "100");
    expect(result).toEqual(2 * (10 + 100));
  });

  test("returns 0 for length and width of 0", () => {
    const result = calculateCanvasPerimeter("0", "0");
    expect(result).toEqual(0);
  });

  test("returns NaN for invalid inputs", () => {
    expect(calculateCanvasPerimeter("invalid", "100")).toBeNaN();
  });

  test("returns NaN for empty strings", () => {
    expect(calculateCanvasPerimeter("", "")).toBeNaN();
  });

  test("returns NaN for non-numeric strings", () => {
    expect(calculateCanvasPerimeter("abc", "def")).toBeNaN();
  });

  test("returns NaN for negative values", () => {
    expect(calculateCanvasPerimeter("-10", "-20")).toBeNaN();
  });

  test("handles decimal values", () => {
    const result = calculateCanvasPerimeter("10.5", "20.5");
    expect(result).toEqual(2 * (10.5 + 20.5));
  });
});
