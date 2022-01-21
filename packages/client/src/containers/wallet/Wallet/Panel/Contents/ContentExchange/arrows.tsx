import React from 'react';
import { Image } from '@project/libs/components';
import cx from 'classnames';
import { ExchangeIcon } from '@project/libs/assets/images';
import styles from './styles.module.scss';

export const Arrows: React.FC = () => (
  <div className={cx(styles.arrows__container)}>
    <div className={cx(styles.arrows__icon)}>
      <Image url={ExchangeIcon} />
    </div>
    <div className={cx(styles.arrows__line)} />
  </div>
);
