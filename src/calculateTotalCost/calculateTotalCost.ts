export default function calculateTotalCost(
  paintCost: number,
  laborCost: number
): number {
  if (
    isNaN(paintCost) ||
    isNaN(laborCost) ||
    paintCost < 0 ||
    laborCost < 0
  ) {
    return NaN;
  }

  return paintCost + laborCost;
}
