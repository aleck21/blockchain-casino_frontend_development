import { useScrollEffect } from '@project/libs/hooks';
import { useMemo, useRef } from 'react';

interface Props {
  maxOutputCoef?: number;
  minOutputCoef?: number;
  screenProportionStart?: number;
  screenProportionEnd?: number;
}

export const useScrollCoefficient = <T extends HTMLElement>({
  maxOutputCoef = 1,
  minOutputCoef = 0.7,
  screenProportionStart = 0.5,
  screenProportionEnd = 1,
}: Props) => {
  const positions = useScrollEffect();

  const ref = useRef<T>(null);

  const coefficient = useMemo(() => {
    const imageRefTopPosition = ref?.current?.getBoundingClientRect().top || 0;

    const screenPositionCoefficient = imageRefTopPosition / positions.innerHeight;

    if (screenPositionCoefficient < screenProportionStart) {
      return maxOutputCoef;
    }

    if (screenPositionCoefficient > screenProportionEnd) {
      return minOutputCoef;
    }

    const offsetCoef = (
      screenPositionCoefficient - screenProportionStart)
       / (screenProportionEnd - screenProportionStart);

    return (maxOutputCoef - offsetCoef * (maxOutputCoef - minOutputCoef));
  }, [maxOutputCoef, minOutputCoef, positions, screenProportionEnd, screenProportionStart]);

  return {
    coefficient,
    ref,
  };
};
