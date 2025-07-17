export default function calculateCanvasDiagonal(
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

  return Math.sqrt(parsedLength ** 2 + parsedWidth ** 2);
}
