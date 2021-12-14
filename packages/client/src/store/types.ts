import { AuthState, WalletState } from 'types';

export interface ReduxState {
  auth: AuthState;
  wallet: WalletState;
}
