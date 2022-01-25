import React, { memo } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Tabs } from 'antd';
import cx from 'classnames';
import styles from './styles.module.scss';

const RollPanel = memo(() => {
  const { t } = useTranslation('main');
  const { TabPane } = Tabs;

  return (
    <div className={cx(styles.rollPanel__container)}>
      <Tabs
        defaultActiveKey="1"
        onChange={undefined}
      >
        <TabPane
          tab={t('Manual')}
          key="1"
        >
          Manual
        </TabPane>
        <TabPane
          tab={t('Auto')}
          key="2"
        >
          Auto
        </TabPane>
      </Tabs>
    </div>
  );
});

export { RollPanel };
