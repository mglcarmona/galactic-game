import { useEffect, useState, useRef } from "preact/hooks";

const DEFAULT_POLLING_INTERVAL = 15000;

export function usePolling<T>(
  fetcher: () => Promise<T>,
  interval: number = DEFAULT_POLLING_INTERVAL
): T | null {
  const [, forceRender] = useState(0);
  const data = useRef<T | null>(null);
  const timerRef = useRef<number | null>(null);
  const lastFetchTimeRef = useRef<number | null>(null);

  const fetchData = async () => {
    lastFetchTimeRef.current = Date.now();
    try {
      const result = await fetcher();
      console.log("Polling...");
      if (JSON.stringify(result) !== JSON.stringify(data.current)) {
        data.current = result;
        forceRender((prev) => prev + 1);
      }
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

  return data.current;
}
