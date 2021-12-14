import { AuthState } from './types';
import { AuthActionType } from './actionTypes';

export const authReady = () => ({ type: AuthActionType.Ready });

export const authSetState = (payload: Partial<AuthState>) => ({
  type: AuthActionType.SetState,
  payload,
});

export const authSetTokens = (access: string, refresh: string) => ({
  type: AuthActionType.SetTokens,
  payload: { access, refresh },
});

export const authLogout = (payload?: { reason?: string }) => ({
  type: AuthActionType.Logout,
  payload,
});

export const authRefresh = () => ({ type: AuthActionType.Refresh });
