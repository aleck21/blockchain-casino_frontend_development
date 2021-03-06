import createReducer from '@project/libs/utils/createReducer';
import { AuthState } from 'types';
import { authHandlers } from './handlers';

export const authInitialState: Readonly<AuthState> = {
  tokens: {
    access: '',
    refresh: '',
  },

  isLoginEmailLoading: false,
};

export default createReducer(authInitialState, authHandlers);
