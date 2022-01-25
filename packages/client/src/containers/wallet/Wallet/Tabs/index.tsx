import React, { useState } from 'react';
import cx from 'classnames';
import {
  ExchangeIconTabs,
  DepositIcon,
  RakebackIcon,
  WithdrawIcon,
} from '@project/libs/assets/images';
import { TabsLabels } from './TabsLabels';
import { DepositTab } from './DepositTab';
import { WithdrawTab } from './WithdrawTab';
import { RakebackTab } from './RakebackTab';
import { ExchangeTab } from './ExchangeTab';
import { TabsContents } from './TabsContents';
import styles from './styles.module.scss';

const tabsLabels = [
  {
    title: 'Deposit',
    icon: DepositIcon,
  },
  {
    title: 'Withdraw',
    icon: WithdrawIcon,
  },
  {
    title: 'Rakeback',
    icon: RakebackIcon,
  },
  {
    title: 'Exchange',
    icon: ExchangeIconTabs,
  },
];

const tabsContents = [
  <DepositTab />,
  <WithdrawTab />,
  <RakebackTab />,
  <ExchangeTab />,
];

export const Tabs: React.FC = () => {
  const [chosenTabIndex, setChosenTabIndex] = useState(0);

  return (
    <section className={cx(styles.panel__container)}>
      <TabsLabels
        tabLabels={tabsLabels}
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
