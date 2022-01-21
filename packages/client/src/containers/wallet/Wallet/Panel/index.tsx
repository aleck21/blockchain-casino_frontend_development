import React, { useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { TabsHeader } from './TabsHeader';
import { DepositTab } from './Contents/DepositTab';
import { WithdrawTab } from './Contents/WithdrawTab';
import { RakebackTab } from './Contents/RakebackTab';
import { ExchangeTab } from './Contents/ExchangeTab';
import { TabsContents } from './TabsContents';

const tabTitles = [
  'Deposit',
  'Withdraw',
  'Rakeback',
  'Exchange',
];

const tabsContents = [
  <DepositTab />,
  <WithdrawTab />,
  <RakebackTab />,
  <ExchangeTab />,
];

export const Panel: React.FC = () => {
  const [chosenTabIndex, setChosenTabIndex] = useState(0);

  return (
    <section className={cx(styles.panel__container)}>
      <TabsHeader
        tabTitles={tabTitles}
        chosenTabIndex={chosenTabIndex}
        onTabChange={setChosenTabIndex}
      />
      <TabsContents
        tabsContents={tabsContents}
        chosenTabIndex={chosenTabIndex}
      />
    </section>
  );
};
