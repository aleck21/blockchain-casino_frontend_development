import { useCallback, useState } from 'react';

/**
 * Handles element enter and leave, changing hover boolean value
 * @param initialState by default false
 */
export const useHoverEvent = (initialState = false) => {
  const [hover, setHover] = useState(initialState);

  const onMouseEnter = useCallback(() => setHover(true), [setHover]);
  const onMouseLeave = useCallback(() => setHover(false), [setHover]);

  return { hover, onMouseEnter, onMouseLeave };
};
