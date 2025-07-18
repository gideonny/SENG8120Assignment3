import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('should return 0 when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('should return 0 when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });

  test('returns NaN for negative inputs', () => {
    expect(calculatePaintCost(-10, 5)).toBeNaN();
    expect(calculatePaintCost(10, -5)).toBeNaN();
    expect(calculatePaintCost(-10, -5)).toBeNaN();
  });

  test('should handle non-numeric inputs by returning NaN', () => {
    expect(calculatePaintCost(NaN, 5)).toBeNaN();
    expect(calculatePaintCost(10, NaN)).toBeNaN();
  });
});
