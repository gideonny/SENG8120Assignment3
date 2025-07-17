export default function calculateCanvasPerimeter(
  length: string,
  width: string
): number  {
  const len = parseFloat(length);
  const wid = parseFloat(width);

  if (isNaN(len) || isNaN(wid)) {
    return NaN;
  }

  return 2 * (len + wid);
}
