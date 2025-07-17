export default function calculateCanvasDiagonal(
  length: string,
  width: string
): number {
  const len = parseFloat(length);
  const wid = parseFloat(width);

  if (isNaN(len) || isNaN(wid)) return NaN;

  return Math.sqrt(len * len + wid * wid);
}
