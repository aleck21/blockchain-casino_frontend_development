import { all } from 'redux-saga/effects';
import { authEffects } from './auth/sagas';
import { walletSagas } from './wallet/sagas';

export default function* rootSaga() {
  yield all([
    ...authEffects,
    walletSagas,
  ]);
}
