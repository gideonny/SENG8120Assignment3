export default function paintRequiredForMultipleCoats(
  area: number,
  coveragePerLiter: number,
  coats: number
): number {
  if (
    isNaN(area) ||
    isNaN(coveragePerLiter) ||
    isNaN(coats) ||
    area < 0 ||
    coveragePerLiter <= 0 ||
    coats < 0
  ) {
    return NaN;
  }

  return (area / coveragePerLiter) * coats;
}
