import React, { memo } from 'react';
import { Tabs as AntTabs } from 'antd';
import { useTranslation } from '@project/libs/utils/i18n';
import './styles.scss';

const Tabs = memo(() => {
  const { TabPane } = AntTabs;
  const { t } = useTranslation('main');

  return (
    <div className="tabs__container">
      <AntTabs
        defaultActiveKey="1"
      >
        <TabPane
          key="1"
          tab={t('Deposit')}
        >
          Deposit
        </TabPane>
        <TabPane
          key={2}
          tab={t('Withdraw')}
        >
          Withdraw
        </TabPane>
      </AntTabs>
    </div>
  );
});

export { Tabs };
