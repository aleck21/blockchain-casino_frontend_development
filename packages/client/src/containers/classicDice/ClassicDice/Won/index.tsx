import React, { memo } from 'react';
import { WonCoins } from '@project/libs/assets/images';
import { Image, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { won } from './contentDemo';
import styles from './styles.module.scss';

const Won = memo(() => {
  const { t } = useTranslation('main');

  return (
    <div className={styles.won__container}>
      <Text type="h1">
        {t('You won')}
      </Text>
      <Text type="p">
        {won.quantity}
        {' '}
        {won.currency}
      </Text>
      <Image
        url={WonCoins}
      />
    </div>
  );
});

export { Won };
