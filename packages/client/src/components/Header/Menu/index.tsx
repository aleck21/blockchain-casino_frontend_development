import React, { FC, useContext } from 'react';
import { Image } from '@project/libs/components';
import { MenuBurger } from '@project/libs/assets/images';
import cx from 'classnames';
import { WidgetContext } from 'context/widget';
import styles from './styles.module.scss';

export const Menu: FC = () => {
  const { setContentWidget, openWidget } = useContext(WidgetContext);

  const openMenu = () => {
    setContentWidget('menu');
    openWidget();
  };

  return (
    <div
      className={cx(styles.container)}
      onClick={openMenu}
    >
      <Image
        url={MenuBurger}
        className={cx(styles.header__menu)}
      />
    </div>
  );
};
