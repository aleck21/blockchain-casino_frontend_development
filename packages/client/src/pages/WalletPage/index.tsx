import React, { FC } from 'react';
import {
  Wallet,
  BGDDashboard,
  Balance,
} from 'containers';

import styles from './styles.module.scss';

const WalletPage: FC = () => (
  <div className={styles.wallet_page__container}>
    <Wallet />
    <Balance />
    <BGDDashboard />
  </div>
);

export { WalletPage };
