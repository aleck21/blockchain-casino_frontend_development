import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Image, Text } from '@project/libs/components';

type Props = {
  logo: string;
  currency: string;
  countCoin: string | number;
  countUSD: string | number;
  className?: string;
}

export const BalanceItem: React.FC<Props> = ({
  logo,
  currency,
  countCoin,
  countUSD,
  className
}) => {
  return(
    <div className={cx(styles.item__container, className)}>
      <div className={cx(styles.item__currency)}>
        <Image url={logo} className={cx(styles.item__logo)} />
        <Text type='h4'>{currency}</Text>
      </div>
      <div>
        <Text type='p' className={cx(styles.item__text)}>
          {countCoin}
        </Text>
      </div>
      <div>
        <Text type='p' className={cx(styles.item__text)}>
          {countUSD + ' '}
          <Text
            type='span'
            className={cx(styles.item__text, styles.item__text_gray)}
          >
            USD
          </Text>
        </Text>
      </div>
    </div>
  );
}