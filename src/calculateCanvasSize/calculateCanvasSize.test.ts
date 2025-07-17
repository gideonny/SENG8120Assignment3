import calculateCanvasSize from './calculateCanvasSize';

describe('calculateCanvasSize', () => {
  test('calculates size correctly', () => {
    expect(calculateCanvasSize('10', '20')).toBe(60);
  });

  test('returns NaN for negative dimensions', () => {
    expect(calculateCanvasSize('-10', '20')).toBeNaN();
    expect(calculateCanvasSize('10', '-20')).toBeNaN();
  });

  test('returns NaN for non-numeric inputs', () => {
    expect(calculateCanvasSize('a', '20')).toBeNaN();
    expect(calculateCanvasSize('10', 'b')).toBeNaN();
  });
});
