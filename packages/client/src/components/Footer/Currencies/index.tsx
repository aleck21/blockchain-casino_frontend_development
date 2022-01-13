import React, { FC } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text, Image } from '@project/libs/components';
import {
  EthereumIcon, BitcoinIcon, ShibaInuIcon, TetherUsdtIcon,
} from '@project/libs/assets/images';

import cx from 'classnames';
import styles from './styles.module.scss';

export const Currencies: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.container)}>
      <Text
        type="p"
        className={cx(styles.currencies__text)}
      >
        {t('Accepted currencies')}
      </Text>
      <div className={cx(styles.currencies__icons)}>
        <Image
          url={BitcoinIcon}
          className={cx(styles.currencies__icons__icon)}
        />
        <Image
          url={EthereumIcon}
          className={cx(styles.currencies__icons__icon)}
        />
        <Image
          url={TetherUsdtIcon}
          className={cx(styles.currencies__icons__icon)}
        />
        <Image
          url={ShibaInuIcon}
          className={cx(styles.currencies__icons__icon)}
        />
        <Image
          url={BitcoinIcon}
          className={cx(styles.currencies__icons__icon)}
        />
        <Image
          url={BitcoinIcon}
          className={cx(styles.currencies__icons__icon)}
        />
      </div>
    </div>
  );
};
