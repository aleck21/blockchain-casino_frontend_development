import React, { FC } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';
import { Ethereum, Bitcoin, ShibaInu, TetherUsdt } from '@project/libs/assets/images';
import { Image } from '@project/libs/components';

import cx from 'classnames';
import styles from './styles.module.scss';

export const Currencies: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.container)}>
      <Text type='p' className={cx(styles.currencies__text)}>
        {t('Accepted currencies')}
      </Text>
      <div className={cx(styles.currencies__icons)}>
        <Image url={Bitcoin} className={cx(styles.currencies__icons__icon)} />
        <Image url={Ethereum} className={cx(styles.currencies__icons__icon)} />
        <Image url={TetherUsdt} className={cx(styles.currencies__icons__icon)} />
        <Image url={ShibaInu} className={cx(styles.currencies__icons__icon)} />
        <Image url={Bitcoin} className={cx(styles.currencies__icons__icon)} />
        <Image url={Bitcoin} className={cx(styles.currencies__icons__icon)} />
      </div>
    </div>
  );
}