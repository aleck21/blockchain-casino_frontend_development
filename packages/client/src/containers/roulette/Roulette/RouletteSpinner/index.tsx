import React, { memo } from 'react';
import cx from 'classnames';
import {
  RouletteArrowImage,
  RouletteCentralCircle,
} from '@project/libs/assets/images';
import { Image } from '@project/libs/components';
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
    '#52ACFF', // cyan
    '#006DD2', // blue
    '#00D287', // green
    '#B62A4C', // burgundy
    '#FF6287', // pink
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
          // <div
          //  key={item.id}
          //  className={cx(
          //    styles.roulette__segment,
          //    styles[`segment__${k + 1}`],
          //  )}
          // >
          //  <div className={cx(styles.content)}>
          //    <Image url={CurrencyColorIcons[item.currency]} />
          //    <Text type="p">
          //      {item.quantity}
          //    </Text>
          //  </div>
          // </div>
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
