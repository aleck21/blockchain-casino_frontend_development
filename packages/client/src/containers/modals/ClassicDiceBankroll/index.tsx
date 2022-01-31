import React, { memo } from 'react';
import { InfoIconBlue } from '@project/libs/assets/images';
import { Button, Image, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { Tabs } from './Tabs';
import styles from './styles.module.scss';

const ClassicDiceBankroll = memo(() => {
  const { t } = useTranslation('main');

  return (
    <section className={styles.bankroll__container}>
      <Text type="h2">
        {t('Classic Dice Bankroll')}
      </Text>
      <Tabs />
      <div className={styles.bancroll__top10__box}>
        <Text type="h3">
          {t('Top 10')}
        </Text>
      </div>
      <article className={styles.bankroll__footer}>
        <Button
          onClick={undefined}
        >
          <Image url={InfoIconBlue} />
          <Text type="p">
            {t('For more price pool information, please click here!')}
          </Text>
        </Button>
      </article>
    </section>
  );
});

export { ClassicDiceBankroll };
