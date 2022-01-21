import React, { FC } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { WalletTabsProvider } from 'context/walletTabs';
import { Text } from '@project/libs/components';
import { TableGrid } from './components/TableGrid';
import { BalanceItem } from './components/BalaceItem';
import { content } from './contentDemo';
import { BGDDashboard } from './components/BGDDashboard';
import { Panel } from './components/Panel';
import { TabsMobile } from './components/Panel/TabsMobile';
import styles from './styles.module.scss';

const Wallet: FC = () => {
  const { t } = useTranslation('main');
  const items = content.balance;

  return (
    <WalletTabsProvider>
      <div className={cx(styles.wallet__panel)}>
        <Text type="h2">
          {t('Wallet')}
        </Text>
        <Panel />
      </div>
      <div className={cx(styles.wallet__balance)}>
        <TableGrid title={t('Balance')}>
          {items.map((item) => (
            <BalanceItem
              key={item.id}
              {...item}
            />
          ))}
        </TableGrid>
      </div>
      <BGDDashboard />
      <TabsMobile />
    </WalletTabsProvider>
  );
};

export { Wallet };
