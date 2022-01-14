import { useEffect, useState } from 'react';

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(document.documentElement.clientWidth < 420);
  }, []);

  return isMobile;
};
