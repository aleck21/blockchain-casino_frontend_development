import React, { useState } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';
import { StatisticsTab } from './StatisticsTab';
import { BetsTab } from './BetsTab';

export const StatisticsModal: React.FC = () => {
  const { t } = useTranslation('main');
  const [tab, setTab] = useState('statistics');

  const onStatistics = () => {
    setTab('statistics');
  };

  const onBets = () => {
    setTab('bets');
  };

  return (
    <section className={cx(styles.statistics__container)}>
      <div className={cx(styles.statistics__head)}>
        <nav className={cx(styles.statistics__tabs)}>
          <div
            className={cx(styles.item__tab,
              tab === 'statistics' ? styles.active : styles.enactive)}
            onClick={onStatistics}
            onKeyPress={() => {}}
            role="tab"
            tabIndex={0}
          >
            {t('Statistics')}
          </div>
          <div
            className={cx(styles.item__tab,
              tab === 'bets' ? styles.active : styles.enactive)}
            onClick={onBets}
            onKeyPress={() => {}}
            role="tab"
            tabIndex={0}
          >
            {t('Bets')}
          </div>
        </nav>
      </div>
      <article className={cx(styles.statistics__content__box)}>
        {tab === 'statistics' && <StatisticsTab />}
        {tab === 'bets' && <BetsTab />}
      </article>
    </section>
  );
};
