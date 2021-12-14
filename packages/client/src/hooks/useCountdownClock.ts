import { useEffect, useState } from 'react';
import { calcDeadlineTime } from '@project/libs/utils';

export interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const useCountDownClock = (deadlineDate?: Date) => {
  const [time, setTime] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!deadlineDate) return;
    const deadline = deadlineDate.getTime();

    setTime({ ...calcDeadlineTime(deadline) });

    const interval = setInterval(() => {
      const {
        days, hours, minutes, seconds, t,
      } = calcDeadlineTime(deadline);
      setTime({
        days,
        hours,
        minutes,
        seconds,
      });

      if (t < 0) {
        clearInterval(interval);
        setTime({
          days: 0, hours: 0, minutes: 0, seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadlineDate]);

  return {
    time,
  };
};
