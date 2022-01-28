import React, { memo } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { AllBets } from './AllBets';
import { allBets, myBets } from '../ClassicDice/contentDemo';
import styles from './styles.module.scss';
import { MyBets } from './MyBets';
import { DesktopHead } from './DesktopHead';

const Bets = memo(() => {
  const { t } = useTranslation('main');

  return (
    <div className={styles.bets__contaiiner}>
      <DesktopHead title={t('All Bets')} />
      <AllBets bets={allBets} />
      <DesktopHead
        title={t('My Bets')}
        rake={15}
        rakeback={13}
      />
      <MyBets bets={myBets} />
    </div>
  );
});

export { Bets };
