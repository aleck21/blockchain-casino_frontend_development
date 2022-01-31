import React, { memo } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Tabs } from 'antd';
import './styles.scss';
import { AutoTab } from './Tabs/AutoTab';
import { ManualTab } from './Tabs/ManualTab';

const RollPanel = memo(() => {
  const { t } = useTranslation('main');
  const { TabPane } = Tabs;

  return (
    <div className="rollPanel__container">
      <Tabs
        defaultActiveKey="1"
        onChange={undefined}
      >
        <TabPane
          tab={t('Manual')}
          key="1"
        >
          <ManualTab />
        </TabPane>
        <TabPane
          tab={t('Auto')}
          key="2"
        >
          <AutoTab />
        </TabPane>
      </Tabs>
    </div>
  );
});

export { RollPanel };
