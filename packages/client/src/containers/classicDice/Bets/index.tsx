import React, { memo } from 'react';
import { useMobile } from 'hooks';
import { useTranslation } from '@project/libs/utils/i18n';
import { Tabs } from 'antd';
import { AllBets } from './AllBets';
import { allBets, myBets } from '../ClassicDice/contentDemo';
import { MyBets } from './MyBets';
import { DesktopHead } from './DesktopHead';
import { History } from '../ClassicDice/History';
import './styles.scss';

const Bets = memo(() => {
  const { t } = useTranslation('main');
  const isMobile = useMobile();
  const { TabPane } = Tabs;

  return (
    <div className="bets__contaiiner">
      {isMobile
        ? (
          <Tabs
            defaultActiveKey="1"
          >
            <TabPane
              key="1"
              tab={t('All Bets')}
            >
              <AllBets bets={allBets} />
            </TabPane>
            <TabPane
              key="2"
              tab={t('My Bets')}
            >
              <MyBets bets={myBets} />
            </TabPane>
            <TabPane
              key="3"
              tab={t('History')}
            >
              <History />
            </TabPane>
          </Tabs>
        )
        : (
          <>
            <DesktopHead title={t('All Bets')} />
            <AllBets bets={allBets} />
            <DesktopHead
              title={t('My Bets')}
              rake={15}
              rakeback={13}
            />
            <MyBets bets={myBets} />
          </>
        )}
    </div>
  );
});

export { Bets };
