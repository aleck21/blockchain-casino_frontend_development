import React, { memo } from 'react';
import { ChooseCurrency } from '../ChooseCurrency';
import { Active } from './Active';
import { LinkBonus } from './LinkBonus';
import { Free } from './Free';
import { Deposit } from './Deposit';

export const DepositTab = memo(() => {
  const freeDemo = {
    currencyCount: 1000,
    currencyType: 'BNB',
  };

  return (
    <section>
      <ChooseCurrency />
      <Active />
      <LinkBonus />
      <Deposit />
      <Free {...freeDemo} />
    </section>
  );
});
