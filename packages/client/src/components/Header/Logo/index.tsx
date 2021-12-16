import React, { FC } from 'react';
import { Image } from '@project/libs/components';
import { BunnyGameLogoSmall } from '@project/libs/assets/images';
import cx from 'classnames';
import styles from './styles.module.scss';

export const Logo: FC = () => {
  return (
    <div className={cx(styles.container)}>
      <Image url={BunnyGameLogoSmall} className={cx(styles.header__logo)} />
    </div>
  );
}