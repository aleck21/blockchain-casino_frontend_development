import { useEffect, useState } from 'react';
import { mobilePhoneWidth } from '../constants/mobileSizes';

export const useMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(document.documentElement.clientWidth < mobilePhoneWidth);
  }, []);

  return isMobile;
};
