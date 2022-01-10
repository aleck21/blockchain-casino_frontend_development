import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Info } from '../Info';
import { Wallet } from '../Wallet';
import { Profile } from '../Profile';
import { Note } from '../Note';

export const HeaderContentUser: FC = () => (
  <section className={cx(styles.container)}>
    <Info />
    <Wallet />
    <Profile />
    <div className={cx(styles.head_user_contet__note)}>
      <Note />
    </div>
  </section>
);
