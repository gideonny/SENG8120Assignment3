import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('calculates diagonal correctly', () => {
    expect(calculateCanvasDiagonal('3', '4')).toBeCloseTo(5);
  });

  test('returns NaN for negative dimensions', () => {
    expect(calculateCanvasDiagonal('-3', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', '-4')).toBeNaN();
  });

  test('returns NaN for non-numeric inputs', () => {
    expect(calculateCanvasDiagonal('a', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', 'b')).toBeNaN();
  });
});
