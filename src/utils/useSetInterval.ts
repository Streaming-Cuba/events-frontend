import { useEffect, useRef } from "react";

export default function useSetInterval(fn: () => void, delay: number): void {
  const savedFn = useRef(null);

  useEffect(() => {
    savedFn.current = fn;
  }, [ fn ]);

  useEffect(() => {
    function tick() {
      savedFn.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [ delay ]);

}
