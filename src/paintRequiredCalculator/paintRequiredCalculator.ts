export default function paintRequiredCalculator(
  area: number,
  coveragePerLiter: number
): number {
  if (isNaN(area) || isNaN(coveragePerLiter)) {
    return NaN;
  }

  return area / coveragePerLiter;
}
