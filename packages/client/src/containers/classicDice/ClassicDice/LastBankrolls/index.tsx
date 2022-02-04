import React, { memo } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';
import { BankrollButton } from 'containers/classicDice/BankrollButton';
import { bankroll, lastBankrolls } from 'containers/classicDice/ClassicDice/contentDemo';
import styles from './styles.module.scss';

const LastBankroll = memo(() => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.lastBankroll__container)}>
      <Text type="h3">
        {t('Bankroll')}
        {' — '}
        <b>
          {Math.round(Number(bankroll.quantity))}
          {' '}
          {bankroll.currency}
        </b>
      </Text>
      <div className={styles.mobile__bankrollButton}>
        <BankrollButton
          currency={bankroll.currency}
          quantity={bankroll.quantity}
        />
      </div>
      <div className={cx(styles.lastBankroll__box)}>
        {lastBankrolls.map((item) => (
          <div
            className={cx(
              item.isActive
                ? styles.bankroll__active
                : styles.bankroll__inactive,
            )}
            key={item.id}
          >
            {item.bankroll}
          </div>
        ))}
      </div>
    </div>
  );
});

export { LastBankroll };
