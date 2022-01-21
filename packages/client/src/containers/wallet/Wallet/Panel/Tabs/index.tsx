import React, { useContext } from 'react';
import cx from 'classnames';
import { WalletTabsContext } from 'context/walletTabs';
import styles from './styles.module.scss';
import { TabItem } from './TabItem';

export const Tabs: React.FC = () => {
  const { tabs } = useContext(WalletTabsContext);

  return (
    <nav className={cx(styles.tabs__container)}>
      <TabItem
        isActive={tabs.deposit}
        tab="deposit"
        title="Deposit"
      />
      <TabItem
        isActive={tabs.withdraw}
        tab="withdraw"
        title="Withdraw"
      />
      <TabItem
        isActive={tabs.rakeback}
        tab="rakeback"
        title="Rakeback"
      />
      <TabItem
        isActive={tabs.exchange}
        tab="exchange"
        title="Exchange"
      />
    </nav>
  );
};
