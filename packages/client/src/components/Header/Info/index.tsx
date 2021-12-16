import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Image, Text } from '@project/libs/components';
import { ArrowToDown } from '@project/libs/assets/images';
// import { splitFloatNumber } from 'utils/splitFloatNumber';

export const Info: FC = () => {
  const currencyCount = 0.0000001;

  // const [wholePart, fraction] = splitFloatNumber(currencyCount);
  const wholePart = '0';
  const fraction = '0000000';

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
        <Text type='p' className={cx(styles.text)}>
          {wholePart + '.'}
          <Text type='span' className={cx(styles.text_pale)}>
            {fraction}
          </Text>
        </Text>
      </section>
    </div>
  );
}
