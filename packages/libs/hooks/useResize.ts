import { useEffect, useState } from 'react';

/**
 * Calls {fn} when window resize occurs
 * @param fn - callback function
 */

type Callback = (width: number, height: number) => void;

export const useResize = (fn: Callback) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    function updateSize() {
      setWidth(+window.innerWidth);
      setHeight(+window.innerHeight);
      fn(width, height);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [fn, height, width]);

  return {
    width,
    height,
  };
};
