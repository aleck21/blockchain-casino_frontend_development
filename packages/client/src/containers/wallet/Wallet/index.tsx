import React, { FC } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { HeadPage } from 'components/HeadPage';
import { WalletTabsProvider } from 'context/walletTabs';
import styles from './styles.module.scss';
import { TableGrid } from './components/TableGrid';
import { BalanceItem } from './components/BalaceItem';
import { content } from './contentDemo';
import { BGDDashboard } from './components/BGDDashboard';
import { Panel } from './components/Panel';
import { TabsMobile } from './components/Panel/TabsMobile';

const Wallet: FC = () => {
  const { t } = useTranslation('main');
  const items = content.balance;

  return (
    <WalletTabsProvider>
      <div className={cx(styles.wallet__container)}>
        <div className={cx(styles.wallet__panel)}>
          <HeadPage>
            {t('Wallet')}
          </HeadPage>
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
      </div>
    </WalletTabsProvider>
  );
};

export { Wallet };
