import React, { memo, useState } from 'react';
import { AvatarDefault, InfoIconBlue } from '@project/libs/assets/images';
import { Button, Image, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { PopUp } from 'components';
import { BankrollInfoModal } from './BankrollInfoModal';
import { Tabs } from './Tabs';
import { top10 } from './contentDemo';
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
        <div className={styles.bancroll__top10__box}>
          <Text type="h3">
            {t('Top 10')}
          </Text>
          <table>
            <thead>
              <tr>
                <th>
                  {t('Player')}
                </th>
                <th>
                  {t('Amount')}
                </th>
              </tr>
            </thead>
            <tbody>
              {top10.map((row) => (
                <tr key={row.id}>
                  <td>
                    <Image url={AvatarDefault} />
                    &emsp;
                    {row.userName}
                  </td>
                  <td className={styles.right}>
                    {row.amount.quantity}
                    {' '}
                    <span>
                      {row.amount.currency}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
