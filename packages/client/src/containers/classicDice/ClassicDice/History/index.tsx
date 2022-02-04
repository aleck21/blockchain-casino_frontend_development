import React, { memo } from 'react';
import { Text, Image } from '@project/libs/components';
import { AvatarDefault } from '@project/libs/assets/images';
import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';
import { top10 } from './contentDemo';

const History = memo(() => {
  const { t } = useTranslation('main');

  return (
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
  );
});

export { History };
