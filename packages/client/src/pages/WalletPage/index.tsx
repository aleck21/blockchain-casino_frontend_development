import React, { FC } from 'react';
import {
  Wallet,
} from 'containers';

import styles from './styles.module.scss';

const WalletPage: FC = () => (
  <div className={styles.wallet_page__container}>
    <Wallet />
  </div>
);

export { WalletPage };
