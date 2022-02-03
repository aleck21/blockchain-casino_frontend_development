import React, { memo, useState } from 'react';
import { InfoIconBlue } from '@project/libs/assets/images';
import { Button, Image, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { PopUp } from 'components';
import { History } from 'containers';
import { BankrollInfoModal } from './BankrollInfoModal';
import { Tabs } from './Tabs';
import styles from './styles.module.scss';

const ClassicDiceBankroll = memo(() => {
  const { t } = useTranslation('main');
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const onInfoOpen = () => {
    setIsInfoOpen(true);
  };

  const onInfoClose = () => {
    setIsInfoOpen(false);
  };

  return (
    <>
      <section className={styles.bankroll__container}>
        <Text type="h2">
          {t('Classic Dice Bankroll')}
        </Text>
        <Tabs />
        <History />
        <article className={styles.bankroll__footer}>
          <Button
            onClick={onInfoOpen}
          >
            <Image url={InfoIconBlue} />
            <Text type="p">
              {t('For more price pool information, please click here!')}
            </Text>
          </Button>
        </article>
      </section>
      {isInfoOpen && (
        <PopUp
          onClose={onInfoClose}
        >
          <BankrollInfoModal
            onBack={onInfoClose}
          />
        </PopUp>
      )}
    </>
  );
});

export { ClassicDiceBankroll };
