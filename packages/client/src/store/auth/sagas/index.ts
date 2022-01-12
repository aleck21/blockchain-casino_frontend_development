import { fork } from 'redux-saga/effects';
import { authLogoutSaga } from './logout';
import { authLoginSaga } from './login';

export const authEffects = [
  fork(authLogoutSaga),
  fork(authLoginSaga),
];
