import React, { memo } from 'react';
import { AvatarDefault, InfoIconBlue } from '@project/libs/assets/images';
import { Button, Image, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { Tabs } from './Tabs';
import styles from './styles.module.scss';
import { withdraw } from './contentDemo';

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
            {withdraw.top10.map((row) => (
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
