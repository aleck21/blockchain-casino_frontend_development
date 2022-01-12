import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type TimerProps = {
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
};

export const Timer: React.FC<TimerProps> = ({
  hours,
  minutes,
  seconds,
}) => (
  <div className={cx(styles.timer__container)}>
    <div className={cx(styles.timer__windowTime)}>
      {hours}
    </div>
    :
    <div className={cx(styles.timer__windowTime)}>
      {minutes}
    </div>
    :
    <div className={cx(styles.timer__windowTime)}>
      {seconds}
    </div>
  </div>
);
