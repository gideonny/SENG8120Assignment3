import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should calculate total cost correctly for positive values', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
    expect(calculateTotalCost(200, 75)).toBe(275);
    expect(calculateTotalCost(150, 100)).toBe(250);
  });

  test('should return paint cost when labor cost is 0', () => {
    expect(calculateTotalCost(100, 0)).toBe(100);
  });

  test('should return labor cost when paint cost is 0', () => {
    expect(calculateTotalCost(0, 50)).toBe(50);
  });

  test('returns NaN for negative paint or labor cost', () => {
    expect(calculateTotalCost(-100, 50)).toBeNaN();
    expect(calculateTotalCost(100, -50)).toBeNaN();
  });

  test('should return 0 when both costs are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });

  test('should handle non-numeric inputs by returning NaN', () => {
    expect(calculateTotalCost(NaN, 50)).toBeNaN();
    expect(calculateTotalCost(100, NaN)).toBeNaN();
    expect(calculateTotalCost(NaN, NaN)).toBeNaN();
  });

});
