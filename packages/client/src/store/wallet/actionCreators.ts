import { WalletState } from './types';
import { WalletActionType } from './actionTypes';

export const walletSetState = (payload: Partial<WalletState>) => ({
  type: WalletActionType.SetState,
  payload,
});

export const walletConnect = () => ({
  type: WalletActionType.CONNECT,
});

export const walletMint = () => ({
  type: WalletActionType.MINT,
});
