import { put, takeLatest } from 'redux-saga/effects';
import { authSetTokens } from '../actionCreators';
import { AuthActionType } from '../actionTypes';

export function* logout() {
  yield put(authSetTokens('', ''));
}

export function* authLogoutSaga() {
  yield takeLatest(AuthActionType.Logout, logout);
}
