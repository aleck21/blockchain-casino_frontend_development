import { ActionFn } from '@project/libs/types/redux';
import { WalletState } from 'types';
import { walletSetState } from './actionCreators';
import { WalletActionType } from './actionTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type WalletHandlerFn<F extends (...args: any[]) => any> = ActionFn<WalletState, ReturnType<F>>;

const setState: WalletHandlerFn<typeof walletSetState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

export const walletHandlers = {
  [WalletActionType.SetState]: setState,
};
