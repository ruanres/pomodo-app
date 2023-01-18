import { useEffect, useRef } from 'react';

type Callback = () => void;
export type Delay = number | null;

const useInterval = (callback: Callback, delay: Delay) => {
  const savedCallback = useRef<Callback>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }

    if (delay !== null) {
      const id = window.setInterval(tick, delay);
      return () => window.clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
