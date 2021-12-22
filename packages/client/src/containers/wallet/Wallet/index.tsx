import { FC, useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Paper } from '../../../components/Paper';
import { Text } from '@project/libs/components';
import { TableGrid } from './components/TableGrid';
import { BalanceItem } from './components/BalaceItem';
import { content } from './contentDemo';
import { useTranslation } from '@project/libs/utils/i18n';
import { BGDDashboard } from './components/BGDDashboard';
import { Panel } from './components/Panel';
import { TabsMobile } from './components/Panel/TabsMobile';
import { SelectedTab } from './context';


const Wallet: FC = () => {
  const { t } = useTranslation('main');
  const items = content.balance;
  const [tabSelect, setTabSelect] = useState('deposit');
  
  return (
    <SelectedTab.Provider value={[tabSelect, setTabSelect]}>
      <div className={cx(styles.wallet__container)}> 
        <div className={cx(styles.wallet__panel)}>
          <Text type='h2'>
            Wallet
          </Text>
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
    </SelectedTab.Provider>
  )
};

export { Wallet };