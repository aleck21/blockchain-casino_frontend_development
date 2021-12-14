import { ReduxState, WalletState } from 'types';

export const walletSelectors = {
  getState: (state: ReduxState) => state.wallet,
  getProp: <PropKey extends keyof WalletState>(propKey: PropKey) => (
    state: ReduxState,
  ) => state.wallet[propKey],
};
