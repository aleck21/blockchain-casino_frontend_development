import React from 'react';
import { Image } from '@project/libs/components';
import cx from 'classnames';
import styles from './styles.module.scss';
import { ExchangeIcon } from '@project/libs/assets/images';

export const Arrows: React.FC = () => {
  return(
    <div className={cx(styles.arrows__container)}>
      <div className={cx(styles.arrows__icon)}>
        <Image url={ExchangeIcon} />
      </div>
      <div className={cx(styles.arrows__line)} />
    </div>
  );
}