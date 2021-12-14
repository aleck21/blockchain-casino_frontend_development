import { ActionFn } from '@project/libs/types/redux';
import { assocPath } from 'ramda';
import { AuthState } from 'types';
import { authSetState } from './actionCreators';
import { AuthActionType } from './actionTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AuthHandlerFn<F extends (...args: any[]) => any> = ActionFn<AuthState, ReturnType<F>>;

const setState: AuthHandlerFn<typeof authSetState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

const setTokens: AuthHandlerFn<typeof authSetState> = (
  state,
  { payload },
) => assocPath(['tokens'], { ...state.tokens, ...payload }, state);

export const authHandlers = {
  [AuthActionType.SetState]: setState,
  [AuthActionType.SetTokens]: setTokens,
};
