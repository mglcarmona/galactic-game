import { useMemo, useState } from "preact/hooks";

export const usePagination = <T>(
  data: T[],
  pageStart: number = 1,
  sizeStart: number = 10
) => {
  const [page, setPage] = useState(pageStart);
  const [size, setSize] = useState(sizeStart);

  const memoData = useMemo(() => {
    const start = (page - 1) * size;
    const end = start + size;
    return data.slice(start, end);
  }, [data, page, size]);

  const total = data.length;

  return {
    data: memoData,
    page,
    setPage,
    size,
    setSize,
    total,
  };
};
