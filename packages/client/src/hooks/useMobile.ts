import { useEffect, useState } from 'react';
import { MOBILE_PHONE } from '../constants/mobileSizes';

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(document.documentElement.clientWidth < MOBILE_PHONE);
  }, []);

  return isMobile;
};
