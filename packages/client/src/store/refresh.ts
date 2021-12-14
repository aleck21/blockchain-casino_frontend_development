import { MiddlewareAPI } from 'redux';
import { ReduxState } from 'types';
import { authRefresh } from './auth/api';
import { authSetTokens } from './auth/actionCreators';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const refreshTokens = async (store: MiddlewareAPI<any, ReduxState>) => {
  const { refresh: token } = store.getState().auth.tokens;
  const { data: { access, refresh } } = await authRefresh(token);
  store.dispatch(authSetTokens(access, refresh));
  return access;
};
