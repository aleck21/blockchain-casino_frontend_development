import { takeEvery, takeLeading } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/es/constants';
import { AuthActionType } from '../actionTypes';
import { authLogoutSaga } from './logout';
import { authRehydrateSaga } from './rehydrate';
import { authOnRefreshSaga } from './refresh';

export default function* authSaga() {
  yield takeEvery(REHYDRATE, authRehydrateSaga);
  yield takeLeading(AuthActionType.Logout, authLogoutSaga);
  yield takeLeading(AuthActionType.Refresh, authOnRefreshSaga);
}
