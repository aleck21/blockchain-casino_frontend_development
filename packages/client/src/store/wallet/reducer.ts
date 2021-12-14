import createReducer from '@project/libs/utils/createReducer';
import { WalletState } from 'types';
import { walletHandlers } from './handlers';

export const walletInitialState: Readonly<WalletState> = {
  isConnected: false,
  publicAddress: undefined,
};

export default createReducer(walletInitialState, walletHandlers);
