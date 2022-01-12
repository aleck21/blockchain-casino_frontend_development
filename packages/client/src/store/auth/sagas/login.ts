import { put, takeLatest } from 'redux-saga/effects';
import { authLoginEmail, authSetState } from '../actionCreators';
import { AuthActionType } from '../actionTypes';

export function* loginEmail({ payload }: ReturnType<typeof authLoginEmail>) {
  try {
    const { email, password } = payload;

    yield put(authSetState({ isLoginEmailLoading: true }));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(authSetState({ isLoginEmailLoading: false }));
  }
}

export function* authLoginSaga() {
  yield takeLatest(AuthActionType.LoginEmail, loginEmail);
}
