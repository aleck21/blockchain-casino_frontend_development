import React, { useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { TabItem } from './TabItem';

export const Tabs: React.FC = () => {
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
    })
  };

  const onWithdraw = () => {
    setIsActive({
      deposit: false,
      withdraw: true,
      rakeback: false,
      exchange: false
    })
  };
  
  const onRakeback = () => {
    setIsActive({
      deposit: false,
      withdraw: false,
      rakeback: true,
      exchange: false
    })
  };

  const onExchange = () => {
    setIsActive({
      deposit: false,
      withdraw: false,
      rakeback: false,
      exchange: true
    })
  };

  return (
    <nav className={cx(styles.tabs__container)}>
      <TabItem
        isActive={isActive.deposit}
        onClick={onDeposit}
        title='Deposit'
      />
      <TabItem
        isActive={isActive.withdraw}
        onClick={onWithdraw}
        title='Withdraw'
      />
      <TabItem
        isActive={isActive.rakeback}
        onClick={onRakeback}
        title='Rakeback'
      />
      <TabItem
        isActive={isActive.exchange}
        onClick={onExchange}
        title='Exchange'
      />
    </nav>
  );
}