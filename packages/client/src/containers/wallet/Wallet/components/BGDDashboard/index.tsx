import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { DashboardTitle } from './DashboardTitle';
import { LockedBlock } from './LockedBlock';
import { Percentage } from './Percentage';
import { Details } from './Details';

export const BGDDashboard: React.FC = () => (
  <section className={cx(styles.dashboard__container)}>
    <DashboardTitle />
    <LockedBlock />
    <div className={cx(styles.details__desktop)}>
      <Details />
    </div>
    <Percentage />
  </section>
);
