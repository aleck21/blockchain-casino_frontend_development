import React, { useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { TabItemMobile } from './TabItemMobile';
import {
  ExchangeIconTabs,
  DepositIcon,
  RakebackIcon,
  WithdrawIcon
} from '@project/libs/assets/images';

export const TabsMobile: React.FC = () => {
  const [isActive, setIsActive] = useState({
    deposit: true,
    withdraw: false,
    rakeback: false,
    exchange: false
  });
  
  const onDeposit = () => {
    setIsActive({
      deposit: true,
      withdraw: false,
      rakeback: false,
      exchange: false
    });
  };

  const onWithdraw = () => {
    setIsActive({
      deposit: false,
      withdraw: true,
      rakeback: false,
      exchange: false
    });
  };
  
  const onRakeback = () => {
    setIsActive({
      deposit: false,
      withdraw: false,
      rakeback: true,
      exchange: false
    });
  };

  const onExchange = () => {
    setIsActive({
      deposit: false,
      withdraw: false,
      rakeback: false,
      exchange: true
    });
  };

  return (
    <nav className={cx(styles.tabs__container__mobile)}>
      <TabItemMobile
        isActive={isActive.deposit}
        onClick={onDeposit}
        title='Deposit'
        icon={DepositIcon}
      />
      <TabItemMobile
        isActive={isActive.withdraw}
        onClick={onWithdraw}
        title='Withdraw'
        icon={WithdrawIcon}
      />
      <TabItemMobile
        isActive={isActive.exchange}
        onClick={onExchange}
        title='Exchange'
        icon={ExchangeIconTabs}
      />
      <TabItemMobile
        isActive={isActive.rakeback}
        onClick={onRakeback}
        title='Rakeback'
        icon={RakebackIcon}
      />
    </nav>
  );
}