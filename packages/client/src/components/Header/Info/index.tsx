import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Image, Text } from '@project/libs/components';
import { ArrowToDown } from '@project/libs/assets/images';

export const Info: React.FC = () => {
  const currencyCount = 0.0000001;

  const currencyFormat = (currency: number) => {
    let currencyString = currency.toFixed(7);
    const [whole, fraction] = currencyString.split('.');
    return(
      <p className={cx(styles.text)}>
        {whole}.
        <span className={cx(styles.text_pale)}>
          {fraction}
        </span>
      </p>
    );
  }

  return (
    <div className={cx(styles.container)}>
      <section className={cx(styles.header_info__currency)}>
        <Text type='p' className={cx(styles.text)}>
          BTC
        </Text>
        <Image
          url={ArrowToDown}
          className={cx(styles.header_info__curency__arrow)}
        />
      </section>
      <section className={cx(styles.header_info__count)}>
        {currencyFormat(currencyCount)}
      </section>
    </div>
  );
}
