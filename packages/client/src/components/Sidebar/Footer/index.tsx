import React, { FC } from 'react';
import { Facebook, Discord, Twitter } from '@project/libs/assets/images';
import { Image } from '@project/libs/components';

import cx from 'classnames';
import styles from './styles.module.scss';

export const Footer: FC = () => (
  <div className={cx(styles.container)}>
    <a href="">
      <Image
        url={Facebook}
        className={cx(styles.sidebar_footer__icon)}
      />
    </a>
    <a href="">
      <Image
        url={Discord}
        className={cx(styles.sidebar_footer__icon)}
      />
    </a>
    <a href="">
      <Image
        url={Twitter}
        className={cx(styles.sidebar_footer__icon)}
      />
    </a>
  </div>
);
