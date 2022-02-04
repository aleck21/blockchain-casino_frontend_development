import React, { memo } from 'react';
import { Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import styles from './styles.module.scss';

type Bets = {
  id: string | number,
  time: Date,
  bet: {
    currency: string,
    quantity: number | string,
  },
  multiplier: number | string,
  profit: {
    currency: string,
    quantity: number | string,
  },
};

type MyBetsProps = {
  bets: Bets[];
};

const Table = memo(({
  bets,
}: MyBetsProps) => (
  <div className={cx(styles.bets__table__box)}>
    {bets.map((row) => (
      <div
        className={cx(styles.bets__table__row)}
        key={row.id}
      >
        <Text type="p">
          {row.id}
        </Text>
        <Text type="p">
          {
            `${row.time.toLocaleTimeString('en-GB', { hour12: false })} 
            ${row.time.toLocaleDateString(
              'en-GB',
              { day: '2-digit', month: '2-digit', year: '2-digit' },
            )}`
          }
        </Text>
        <Text type="p">
          {row.bet.quantity}
          <span>
            {' '}
            {row.bet.currency}
          </span>
        </Text>
        <Text type="p">
          {row.multiplier}
        </Text>
        <Text type="p">
          {row.profit.quantity}
          <span>
            {' '}
            {row.profit.currency}
          </span>
        </Text>
      </div>
    ))}
  </div>
));

const MyBets = memo(({
  bets,
}: MyBetsProps) => {
  const { t } = useTranslation('main');

  return (
    <section className={cx(styles.bets__container)}>
      <div className={cx(styles.bets__header)}>
        <Text type="p">
          {t('Bet ID')}
        </Text>
        <Text type="p">
          {t('Time')}
        </Text>
        <Text type="p">
          {t('Bet')}
        </Text>
        <Text type="p">
          {t('Multiplier')}
        </Text>
        <Text type="p">
          {t('Profit')}
        </Text>
      </div>
      <div className={cx(styles.bets__table__container)}>
        <Table bets={bets} />
        <div className={cx(styles.table__shadow)} />
      </div>
    </section>
  );
});

export { MyBets };
