import React, { memo } from 'react';
import { Image, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { AvatarDefault } from '@project/libs/assets/images';
import { CurrencyColorIcons } from 'constants/currencies';
import cx from 'classnames';
import styles from './styles.module.scss';

type Bets = {
  id: string | number,
  player: string,
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

type AllBetsProps = {
  bets: Bets[];
};

const Table = memo(({
  bets,
}: AllBetsProps) => (
  <div className={cx(styles.bets__table__box)}>
    {bets.map((row) => (
      <div
        className={cx(styles.bets__table__row)}
        key={row.id}
      >
        <div className={cx(styles.player__box)}>
          <Image url={AvatarDefault} />
          <Text type="p">
            {row.player}
          </Text>
        </div>
        <div className={cx(styles.currency_text__box)}>
          <Image url={CurrencyColorIcons[row.bet.currency]} />
          <Text type="p">
            {row.bet.quantity}
          </Text>
        </div>
        <Text type="p">
          {row.multiplier}
        </Text>
        <div className={cx(styles.currency_text__box)}>
          <Image url={CurrencyColorIcons[row.profit.currency]} />
          <Text type="p">
            {row.profit.quantity}
          </Text>
        </div>
      </div>
    ))}
  </div>
));

const AllBets = memo(({
  bets,
}: AllBetsProps) => {
  const { t } = useTranslation('main');

  return (
    <section className={cx(styles.bets__container)}>
      <div className={cx(styles.bets__header)}>
        <Text type="p">
          {t('Player')}
        </Text>
        <Text type="p">
          {t('Bet')}
        </Text>
        <Text type="p">
          {t('Multiplier')}
        </Text>
        <Text
          type="p"
          className={cx(styles.center)}
        >
          {t('Profit')}
        </Text>
      </div>
      <div className={cx(styles.bets__table__container)}>
        <Table
          bets={bets}
        />
        <div className={cx(styles.table__shadow)} />
      </div>
    </section>
  );
});

export { AllBets };
