import React, { useContext } from 'react';
import cx from 'classnames';
import { WalletTabsContext } from 'context/walletTabs';
import styles from './styles.module.scss';
import { Tabs } from './Tabs';
import { DepositTab } from './Contents/DepositTab';
import { WithdrawTab } from './Contents/WithdrawTab';
import { RakebackTab } from './Contents/RakebackTab';
import { ExchangeTab } from './Contents/ExchangeTab';

export const Panel: React.FC = () => {
  const { tabs } = useContext(WalletTabsContext);

  return (
    <section className={cx(styles.panel__container)}>
      <div className={cx(styles.tabs_in_panel)}>
        <Tabs />
      </div>
      {tabs.deposit && <DepositTab />}
      {tabs.withdraw && <WithdrawTab />}
      {tabs.rakeback && <RakebackTab />}
      {tabs.exchange && <ExchangeTab />}
    </section>
  );
};
