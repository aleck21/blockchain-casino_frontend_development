import React, { useContext } from 'react';
import cx from 'classnames';
import { WalletTabsContext } from 'context/walletTabs';
import styles from './styles.module.scss';
import { Tabs } from './Tabs';
import { ContentDeposit } from './Contents/ContentDeposit';
import { ContentWithdraw } from './Contents/ContentWithdraw';
import { ContentRakeback } from './Contents/ContentRakeback';
import { ContentExchange } from './Contents/ContentExchange';

export const Panel: React.FC = () => {
  const { tabs } = useContext(WalletTabsContext);

  return (
    <section className={cx(styles.panel__container)}>
      <div className={cx(styles.tabs_in_panel)}>
        <Tabs />
      </div>
      {tabs.deposit && <ContentDeposit />}
      {tabs.withdraw && <ContentWithdraw />}
      {tabs.rakeback && <ContentRakeback />}
      {tabs.exchange && <ContentExchange />}
    </section>
  );
};
