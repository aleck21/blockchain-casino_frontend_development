import React, { memo } from 'react';
import cx from 'classnames';
import {
  RouletteArrowImage,
  RouletteCentralCircle,
} from '@project/libs/assets/images';
import { Image } from '@project/libs/components';
import { Colors } from 'constants/colors';
import styles from './styles.module.scss';
import { RouletteSegment } from '../RouletteSegment';

type RouletteSpinnerProps = {
  spin: number;
  data: {
    id: string;
    currency: string;
    quantity: string;
  }[];
};

export const RouletteSpinner = memo(({
  spin,
  data,
}: RouletteSpinnerProps) => {
  const colors = [
    Colors.cyan,
    Colors.blue,
    Colors.green,
    Colors.burgundy,
    Colors.pink,
  ];

  return (
    <div className={cx(styles.roulette__container)}>
      <div
        className={cx(styles.roulette__table)}
        style={{ transform: `rotate(${360 + spin * 36}deg)` }}
      >
        {data.map((item, k) => (
          <RouletteSegment
            color={colors[k < 5 ? k : k - 5]}
            quantity={item.quantity}
            currency={item.currency}
            className={cx(styles[`segment__${k + 1}`])}
          />
        ))}
      </div>
      <Image
        url={RouletteArrowImage}
        className={cx(styles.roulette__arrow)}
      />
      <Image
        url={RouletteCentralCircle}
        className={cx(styles.roulette__center)}
      />
    </div>
  );
});
