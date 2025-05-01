export function getPaginationRange(
  current: number,
  total: number,
  delta: number = 2 // Number of pages to show around the current page
): (number | string)[] {
  const range: (number | string)[] = [];

  for (let i = 1; i <= total; i++) {
    if (
      i === 1 ||
      i === total ||
      (i >= current - delta && i <= current + delta)
    ) {
      range.push(i);
    } else if (range[range.length - 1] !== "...") {
      range.push("...");
    }
  }
  return range;
}
