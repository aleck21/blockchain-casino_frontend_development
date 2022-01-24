import React, { FC } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';
import { Tabs } from './Tabs';
import styles from './styles.module.scss';

const Wallet: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.wallet__container)}>
      <Text type="h2">
        {t('Wallet')}
      </Text>
      <Tabs />
    </div>
  );
};

export { Wallet };
