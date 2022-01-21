import React, { memo } from 'react';
import cx from 'classnames';
import {
  RouletteArrow,
  RouletteCentralCircle,
} from '@project/libs/assets/images';
import { Image, Text } from '@project/libs/components';
import { CurrencyColorIcons } from '@project/client/src/constants/currencies';
import styles from './styles.module.scss';

type RouletteProps = {
  spin: number;
  data: {
    id: string;
    currency: string;
    quantity: string;
  }[];
};

export const RouletteSpiner = memo(({
  spin,
  data,
}: RouletteProps) => (
  <div className={cx(styles.roulette__container)}>
    <div
      className={cx(styles.roulette__table)}
      style={{ transform: `rotate(${360 + spin * 36}deg)` }}
    >
      {data.map((item, k) => (
        <div
          key={item.id}
          // url={segment}
          className={cx(
            styles.roulette__segment,
            styles[`segment__${k + 1}`],
          )}
        >
          <div className={cx(styles.content)}>
            <Image url={CurrencyColorIcons[item.currency]} />
            <Text type="p">
              {item.quantity}
            </Text>
          </div>
        </div>
      ))}
    </div>
    <Image
      url={RouletteArrow}
      className={cx(styles.roulette__arrow)}
    />
    <Image
      url={RouletteCentralCircle}
      className={cx(styles.roulette__center)}
    />
  </div>
));
