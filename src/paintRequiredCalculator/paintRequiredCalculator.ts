export default function paintRequiredCalculator(
  area: number,
  coveragePerLiter: number
): number {
  if (
    isNaN(area) ||
    isNaN(coveragePerLiter) ||
    area < 0 ||
    coveragePerLiter <= 0
  ) {
    return NaN;
  }

  return area / coveragePerLiter;
}
