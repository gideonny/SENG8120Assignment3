import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  test('should convert area correctly for positive values', () => {
    expect(convertAreaToSquareFeet(100)).toBeCloseTo(1076.39);
    expect(convertAreaToSquareFeet(200)).toBeCloseTo(2152.78);
    expect(convertAreaToSquareFeet(150)).toBeCloseTo(1614.585);
  });

  test('should return 0 for area of 0', () => {
    expect(convertAreaToSquareFeet(0)).toBe(0);
  });

  test('returns NaN for negative area', () => {
    expect(convertAreaToSquareFeet(-100)).toBeNaN();
  });

  test('should handle NaN input by returning NaN', () => {
    expect(convertAreaToSquareFeet(NaN)).toBeNaN();
  });

});
