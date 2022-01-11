import { fork } from 'redux-saga/effects';
import { authLogoutSaga } from './logout';

export const authEffects = [
  fork(authLogoutSaga),
];
