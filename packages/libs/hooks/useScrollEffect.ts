import {
  useLayoutEffect,
  useState,
  useCallback,
} from 'react';

type Positions = {
  offsetY: number;
  scrollY: number;
  scrollPosition: number;
  innerHeight: number;
};

const defaultPositions: Positions = {
  offsetY: 0,
  scrollY: 0,
  scrollPosition: 0,
  innerHeight: 0,
};

export const useScrollEffect = () => {
  const [positions, setPositions] = useState<Positions>(defaultPositions);

  const updatePosition = useCallback(() => {
    setPositions({
      offsetY: window.pageYOffset,
      scrollY: window.scrollY,
      scrollPosition: window.scrollY + window.innerHeight,
      innerHeight: window.innerHeight,
    });
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('scroll', updatePosition);
    return () => window.removeEventListener('scroll', updatePosition);
  }, [updatePosition]);

  return positions;
};
