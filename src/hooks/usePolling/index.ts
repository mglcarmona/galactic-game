import { useEffect, useState, useRef } from "preact/hooks";

export function usePolling<T>(
  fetcher: () => Promise<T>,
  interval: number = 15000
): T | null {
  const [data, setData] = useState<T | null>(null);
  const timerRef = useRef<number | null>(null);
  const lastFetchTimeRef = useRef<number | null>(null);

  const fetchData = async () => {
    lastFetchTimeRef.current = Date.now();
    try {
      const result = await fetcher();
      setData(result);
    } catch (err) {
      console.error("Polling error:", err);
    }
  };

  useEffect(() => {
    fetchData();

    const startPolling = () => {
      timerRef.current = window.setInterval(() => {
        if (document.visibilityState === "visible") {
          fetchData();
        }
      }, interval);
    };

    const handleVisibilityChange = () => {
      const currentTime = Date.now();
      const timeDiff = currentTime - (lastFetchTimeRef.current || 0);

      console.log("timeDiff", timeDiff);
      if (document.visibilityState === "visible" && timeDiff >= interval) {
        fetchData();
      }
    };

    startPolling();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [fetcher, interval]);

  return data;
}
