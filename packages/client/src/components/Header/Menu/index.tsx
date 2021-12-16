import React, { FC } from 'react';
import { Image } from '@project/libs/components';
import { MenuBurger } from '@project/libs/assets/images';
import cx from 'classnames';
import styles from './styles.module.scss';

export const Menu: FC = () => {
  
  return (
    <div className={cx(styles.container)}>
      <Image
        url={MenuBurger}
        className={cx(styles.header__menu)}
      />
    </div>
  );
}