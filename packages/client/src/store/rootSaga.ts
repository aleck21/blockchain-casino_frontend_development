import { fork } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import { walletSagas } from './wallet/sagas';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(walletSagas);
}
