import { put, takeLatest } from 'redux-saga/effects';
import { authLoginEmail, authSetState } from '../actionCreators';
import { AuthActionType } from '../actionTypes';

export function* loginEmail({ payload }: ReturnType<typeof authLoginEmail>) {
  try {
    console.log(payload);

    console.log(email, password);

    yield put(authSetState({ isLoginEmailLoading: true }));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(authSetState({ isLoginEmailLoading: false }));
  }
}

export function* loginMetamask() {
  try {
    console.log('inside login metamask saga');
    const { ethereum } = window;
    if (ethereum && ethereum.selectedAddress != null) {
      const walletAddress = ethereum.selectedAddress;
      console.log('walletAddress', walletAddress);
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(authSetState({ isLoginEmailLoading: false }));
  }
}

export function* authLoginSaga() {
  yield takeLatest(AuthActionType.LoginEmail, loginEmail);
  yield takeLatest(AuthActionType.LoginMetamask, loginMetamask);
}
