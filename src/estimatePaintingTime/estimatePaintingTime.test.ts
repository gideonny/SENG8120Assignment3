import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('calculates painting time correctly', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
  });

  test('returns NaN for zero or negative speed', () => {
    expect(estimatePaintingTime(100, 0)).toBeNaN();
    expect(estimatePaintingTime(100, -10)).toBeNaN();
  });

  test('returns NaN for negative area', () => {
    expect(estimatePaintingTime(-100, 10)).toBeNaN();
  });

  test('returns NaN for NaN inputs', () => {
    expect(estimatePaintingTime(NaN, 10)).toBeNaN();
    expect(estimatePaintingTime(100, NaN)).toBeNaN();
  });
});
