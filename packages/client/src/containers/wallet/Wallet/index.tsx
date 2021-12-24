import { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Paper } from '../../../components/Paper';
import { TableGrid } from './components/TableGrid';
import { BalanceItem } from './components/BalaceItem';
import { content } from './contentDemo';
import { useTranslation } from '@project/libs/utils/i18n';
import { BGDDashboard } from './components/BGDDashboard';
import { Panel } from './components/Panel';
import { TabsMobile } from './components/Panel/TabsMobile';
import { HeadPage } from 'components/HeadPage';
import { WalletTabsProvider } from 'context/walletTabs';

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
          <Paper className={cx(styles.wallet__panel__paper)}>
            <Panel />
          </Paper>
        </div>
        <div className={cx(styles.wallet__balance)}>
          <TableGrid title={t('Balance')} >
            {items.map((item, key) => (
              <BalanceItem key={key} {...item} />
            ))}
          </TableGrid>
        </div>
        <div className={cx(styles.wallet__bgd_dashboard)}>
          <Paper className={cx(styles.bgd_dashboard__container)}>
            <BGDDashboard />
          </Paper>
        </div>
        <TabsMobile />
      </div>
    </WalletTabsProvider>
  )
};

export { Wallet };