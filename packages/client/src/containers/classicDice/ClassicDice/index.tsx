import React, { useCallback, useContext } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Button, Image, Text } from '@project/libs/components';
import { CurrencyColorIcons } from 'constants/currencies';
import { ModalName } from 'constants/modals';
import { ModalContext } from 'context';
import { bankroll } from './contentDemo';
import { RollPanel } from './RollPanel';
import { GameBlock } from './GameBlock';
import styles from './styles.module.scss';

const ClassicDice: React.FC = () => {
  const { t } = useTranslation('main');
  const { openModal, setContentModal } = useContext(ModalContext);

  const onBankrollButtonClick = useCallback(() => {
    setContentModal(ModalName.classicDiceBankroll);
    openModal();
  }, [setContentModal, openModal]);

  return (
    <div className={styles.dice__container}>
      <header className={styles.dice__header}>
        <Text type="h1">
          {t('Classic Dice')}
        </Text>
        <Button
          onClick={onBankrollButtonClick}
          className={styles.bankroll}
        >
          <Text type="p">
            {t('Bankroll')}
          </Text>
          <div className={styles.button__content}>
            <Image url={CurrencyColorIcons[bankroll.currency]} />
            <Text type="p">
              {bankroll.quantity}
            </Text>
          </div>
        </Button>
      </header>
      <section className={styles.dice__paper}>
        <GameBlock />
        <RollPanel />
      </section>
    </div>
  );
};

export { ClassicDice };
