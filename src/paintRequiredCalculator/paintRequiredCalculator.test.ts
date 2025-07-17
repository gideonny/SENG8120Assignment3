import paintRequiredCalculator from './paintRequiredCalculator';

describe('paintRequiredCalculator', () => {
  test('calculates correctly', () => {
    expect(paintRequiredCalculator(50, 10)).toBe(5);
  });

  test('returns NaN for zero or negative coverage', () => {
    expect(paintRequiredCalculator(50, 0)).toBeNaN();
    expect(paintRequiredCalculator(50, -10)).toBeNaN();
  });

  test('returns NaN for negative area', () => {
    expect(paintRequiredCalculator(-50, 10)).toBeNaN();
  });

  test('returns NaN for NaN inputs', () => {
    expect(paintRequiredCalculator(NaN, 10)).toBeNaN();
    expect(paintRequiredCalculator(50, NaN)).toBeNaN();
  });
});
