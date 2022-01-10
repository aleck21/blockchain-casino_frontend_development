import React from 'react';
import cx from 'classnames';
import { ChooseCurrency } from '../../ChooseCurrency';
import { Active } from '../../Active';
import { LinkBonus } from '../../LinkBonus';
import { Free } from '../../Free';
import { Deposit } from '../../Deposit';
import styles from './styles.module.scss';

export const ContentDeposit: React.FC = () => {
  const freeDemo = {
    currencyCount: 1000,
    currencyType: 'BNB',
  };

  return (
    <section className={cx()}>
      <ChooseCurrency />
      <Active />
      <LinkBonus />
      <Deposit />
      <Free {...freeDemo} />
    </section>
  );
};
