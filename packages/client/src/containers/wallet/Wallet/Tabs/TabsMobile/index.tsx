import React from 'react';
import cx from 'classnames';
import {
  ExchangeIconTabs,
  DepositIcon,
  RakebackIcon,
  WithdrawIcon,
} from '@project/libs/assets/images';
import styles from './styles.module.scss';
import { TabItemMobile } from './TabItemMobile';

export const TabsMobile: React.FC = () => {
  console.log('tabs mobile');

  return (
    <div className={cx(styles.tabs__container__mobile)}>
      <TabItemMobile
        isActive={false}
        title="Deposit"
        icon={DepositIcon}
      />
      <TabItemMobile
        isActive={false}
        title="Withdraw"
        icon={WithdrawIcon}
      />
      <TabItemMobile
        isActive={false}
        title="Exchange"
        icon={ExchangeIconTabs}
      />
      <TabItemMobile
        isActive={false}
        title="Rakeback"
        icon={RakebackIcon}
      />
    </div>
  );
};
