export default function convertAreaToSquareFeet(area: number): number {
  if (isNaN(area) || area < 0) {
    return NaN;
  }

  const conversionFactor = 10.7639;
  return area * conversionFactor;
}
