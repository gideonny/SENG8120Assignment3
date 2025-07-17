import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });

  test('should handle NaN inputs by returning NaN', () => {
    expect(paintRequiredCalculator(NaN, 10)).toBeNaN();
    expect(paintRequiredCalculator(100, NaN)).toBeNaN();
  });

});
