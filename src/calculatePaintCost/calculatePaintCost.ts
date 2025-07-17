export default function calculatePaintCost(
  paintRequired: number,
  costPerLiter: number
): number {
  if (
    isNaN(paintRequired) ||
    isNaN(costPerLiter) ||
    paintRequired < 0 ||
    costPerLiter < 0
  ) {
    return NaN;
  }

  return paintRequired * costPerLiter;
}
