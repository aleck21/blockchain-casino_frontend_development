import React from 'react';
import 'antd/dist/antd.css';
import './styles.scss';
import { Tabs } from 'antd';
import { useTranslation } from '@project/libs/utils/i18n';
import { Deposit } from './Deposit';
import { Bill } from './Bill';

export const TransactionsModal: React.FC = () => {
  const { TabPane } = Tabs;
  const { t } = useTranslation('main');

  return (
    <section className="transactions__container">
      <Tabs
        defaultActiveKey="1"
        onChange={() => {}}
      >
        <TabPane
          tab={t('Deposit')}
          key="1"
        >
          <Deposit />
        </TabPane>
        <TabPane
          tab={t('Withdraw')}
          key="2"
        >
          <Deposit />
        </TabPane>
        <TabPane
          tab={t('Bill')}
          key="3"
        >
          <Bill />
        </TabPane>
      </Tabs>
    </section>
  );
};
