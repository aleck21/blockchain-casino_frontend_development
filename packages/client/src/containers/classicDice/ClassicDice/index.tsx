import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';
import { RollPanel } from './RollPanel';
import { GameBlock } from './GameBlock';
import styles from './styles.module.scss';
import { bankroll } from './contentDemo';
import { BankrollButton } from '../BankrollButton';

const ClassicDice: React.FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={styles.dice__container}>
      <header className={styles.dice__header}>
        <Text type="h1">
          {t('Classic Dice')}
        </Text>
        <BankrollButton
          currency={bankroll.currency}
          quantity={bankroll.quantity}
        />
      </header>
      <section className={styles.dice__paper}>
        <GameBlock />
        <RollPanel />
      </section>
    </div>
  );
};

export { ClassicDice };
