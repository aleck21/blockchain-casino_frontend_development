import React, { useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Tabs } from './Tabs';
import { ContentDeposit } from './Contents/ContentDeposit';
import { ContentWithdraw } from './Contents/ContentWithdraw';
import { ContentRakeback } from './Contents/ContentRakeback';
import { ContentExchange } from './Contents/ContanrExchange';

export const Panel: React.FC = () => {
  const [tab, setTab] = useState('deposit');

  const selectTab = (newtab: string) => {
    setTab(newtab);
  }

  return (
    <section className={cx(styles.panel__container)}>
      <Tabs selectTab={selectTab} />
      {(tab === 'deposit') && <ContentDeposit />}
      {(tab === 'withdraw') && <ContentWithdraw />}
      {(tab === 'rakeback') && <ContentRakeback />}
      {(tab === 'exchange') && <ContentExchange />}
    </section>
  );
}