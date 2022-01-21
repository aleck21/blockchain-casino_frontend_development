import React, { useContext, useState } from 'react';
import cx from 'classnames';
import { WalletTabsContext } from 'context/walletTabs';
import styles from './styles.module.scss';
import { TabsHeader } from './TabsHeader';
import { DepositTab } from './Contents/DepositTab';
import { WithdrawTab } from './Contents/WithdrawTab';
import { RakebackTab } from './Contents/RakebackTab';
import { ExchangeTab } from './Contents/ExchangeTab';

const tabTitles = [
  'Deposit',
  'Withdraw',
  'Rakeback',
  'Exchange',
];

export const Panel: React.FC = () => {
  const { tabs } = useContext(WalletTabsContext);

  const [chosenTabIndex, setChosenTabIndex] = useState(0);

  return (
    <section className={cx(styles.panel__container)}>
      <div className={cx(styles.tabs_in_panel)}>
        <TabsHeader
          tabTitles={tabTitles}
          chosenTabIndex={chosenTabIndex}
          onTabChange={setChosenTabIndex}
        />
      </div>
      {tabs.deposit && <DepositTab />}
      {tabs.withdraw && <WithdrawTab />}
      {tabs.rakeback && <RakebackTab />}
      {tabs.exchange && <ExchangeTab />}
    </section>
  );
};
