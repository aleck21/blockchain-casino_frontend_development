import React, { memo } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type TimerProps = {
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
};

const Points = memo(() => (
  <div className={cx(styles.points)}>
    <div className={cx(styles.point)} />
    <div className={cx(styles.point)} />
  </div>
));

export const Timer: React.FC<TimerProps> = ({
  hours,
  minutes,
  seconds,
}) => (
  <div className={cx(styles.timer__container)}>
    <div className={cx(styles.timer__windowTime)}>
      {hours}
    </div>
    <Points />
    <div className={cx(styles.timer__windowTime)}>
      {minutes}
    </div>
    <Points />
    <div className={cx(styles.timer__windowTime)}>
      {seconds}
    </div>
  </div>
);
