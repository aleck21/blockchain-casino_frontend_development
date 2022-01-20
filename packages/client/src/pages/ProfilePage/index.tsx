import React from 'react';
import cx from 'classnames';
import {
  Profile,
  Membership,
  Statistics,
} from 'containers';
import styles from './styles.module.scss';

export const ProfilePage = () => (
  <section className={cx(styles.profile__container)}>
    <div className={cx(styles.profile__leftBlock)}>
      <Profile />
    </div>
    <div className={cx(styles.profile__rightBlock)}>
      <Membership />
      <Statistics />
    </div>
  </section>
);
