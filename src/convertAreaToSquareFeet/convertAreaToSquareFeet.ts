export default function convertAreaToSquareFeet(area: number): number {
  if (isNaN(area)) {
    return NaN;
  }

  const conversionFactor = 10.7639;
  return area * conversionFactor;
}
