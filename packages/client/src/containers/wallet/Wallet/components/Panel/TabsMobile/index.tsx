import React, { useContext } from 'react';
import cx from 'classnames';
import {
  ExchangeIconTabs,
  DepositIcon,
  RakebackIcon,
  WithdrawIcon,
} from '@project/libs/assets/images';
import { WalletTabsContext } from 'context/walletTabs';
import styles from './styles.module.scss';
import { TabItemMobile } from './TabItemMobile';

export const TabsMobile: React.FC = () => {
  const { tabs } = useContext(WalletTabsContext);

  return (
    <nav className={cx(styles.tabs__container__mobile)}>
      <TabItemMobile
        isActive={tabs.deposit}
        tab="deposit"
        title="Deposit"
        icon={DepositIcon}
      />
      <TabItemMobile
        isActive={tabs.withdraw}
        tab="withdraw"
        title="Withdraw"
        icon={WithdrawIcon}
      />
      <TabItemMobile
        isActive={tabs.exchange}
        tab="exchange"
        title="Exchange"
        icon={ExchangeIconTabs}
      />
      <TabItemMobile
        isActive={tabs.rakeback}
        tab="rakeback"
        title="Rakeback"
        icon={RakebackIcon}
      />
    </nav>
  );
};
