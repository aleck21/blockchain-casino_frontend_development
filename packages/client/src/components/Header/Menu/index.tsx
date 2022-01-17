import React, { FC, useContext } from 'react';
import { Image } from '@project/libs/components';
import { MenuBurger } from '@project/libs/assets/images';
import cx from 'classnames';
import { MenuContext } from 'context';
import styles from './styles.module.scss';

export const Menu: FC = () => {
  const { openMenu } = useContext(MenuContext);

  return (
    <div
      className={cx(styles.container)}
      onClick={openMenu}
      onKeyPress={() => {}}
      tabIndex={0}
      role="button"
    >
      <Image
        url={MenuBurger}
        className={cx(styles.header__menu)}
      />
    </div>
  );
};
