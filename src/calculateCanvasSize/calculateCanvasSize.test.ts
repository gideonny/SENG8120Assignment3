import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("should calculate area correctly for positive values", () => {
    expect(calculateCanvasSize("5", "10")).toEqual(50);
    expect(calculateCanvasSize("7", "3")).toEqual(21);
  });

  test("should return 0 if any dimension is 0", () => {
    expect(calculateCanvasSize("0", "10")).toEqual(0);
    expect(calculateCanvasSize("5", "0")).toEqual(0);
  });

  test("should handle non-numeric strings by returning NaN", () => {
    expect(calculateCanvasSize("a", "5")).toBeNaN();
    expect(calculateCanvasSize("5", "b")).toBeNaN();
    expect(calculateCanvasSize("x", "y")).toBeNaN();
  });

  test("should handle negative dimensions", () => {
    expect(calculateCanvasSize("-5", "10")).toEqual(-50);
    expect(calculateCanvasSize("5", "-10")).toEqual(-50);
    expect(calculateCanvasSize("-5", "-10")).toEqual(50);
  });
});
