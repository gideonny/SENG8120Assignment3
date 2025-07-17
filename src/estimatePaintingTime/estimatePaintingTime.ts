export default function estimatePaintingTime(
  area: number,
  paintingSpeed: number
): number {
  if (
    isNaN(area) ||
    isNaN(paintingSpeed) ||
    area < 0 ||
    paintingSpeed <= 0
  ) {
    return NaN;
  }

  return area / paintingSpeed;
}
