import React, { FC } from 'react';
import { Image } from '@project/libs/components';
import { RouletteMobile } from '@project/libs/assets/images';
import cx from 'classnames';
import styles from './styles.module.scss';

export const Roulette: FC = () => {
  return (
    <div className={cx(styles.container)}>
      <Image url={RouletteMobile} className={cx(styles.header__roulette)} />
    </div>
  );
}