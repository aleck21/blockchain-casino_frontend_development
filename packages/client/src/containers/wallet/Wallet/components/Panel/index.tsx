import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Tabs } from './Tabs';
import { ChooseCurrency } from './ChooseCurrency';
import { Active } from './Active';
import { LinkBonus } from './LinkBonus';
import { Deposit } from './Deposit';

export const Panel: React.FC = () => {
  return (
    <section className={cx(styles.panel__container)}>
      <Tabs />
      <ChooseCurrency />
      <Active />
      <LinkBonus />
      <Deposit />
    </section>
  );
}