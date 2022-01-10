import { FC } from 'react';
import {
  Wallet,
} from 'containers';
import { MainLayout } from '../../layouts/MainLayout';

const WalletPage: FC = () => (
  <MainLayout>
    <Wallet />
  </MainLayout>
);

export { WalletPage };
