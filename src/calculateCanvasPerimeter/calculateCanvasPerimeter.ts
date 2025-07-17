export default function calculateCanvasPerimeter(
  length: string,
  width: string
): number {
  const parsedLength = parseInt(length);
  const parsedWidth = parseInt(width);

  if (
    isNaN(parsedLength) ||
    isNaN(parsedWidth) ||
    parsedLength < 0 ||
    parsedWidth < 0
  ) {
    return NaN;
  }

  return 2 * (parsedLength + parsedWidth);
}
