import React, { FC } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { WalletTabsProvider } from 'context/walletTabs';
import { Text } from '@project/libs/components';
import { Panel } from './Panel';
import { TabsMobile } from './Panel/TabsMobile';
import styles from './styles.module.scss';

const Wallet: FC = () => {
  const { t } = useTranslation('main');

  return (
    <WalletTabsProvider>
      <div className={cx(styles.wallet__panel)}>
        <Text type="h2">
          {t('Wallet')}
        </Text>
        <Panel />
      </div>
      <TabsMobile />
    </WalletTabsProvider>
  );
};

export { Wallet };
