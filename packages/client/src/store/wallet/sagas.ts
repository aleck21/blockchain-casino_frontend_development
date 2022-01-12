import {
  put,
  spawn,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';

import { EventChannel, eventChannel } from 'redux-saga';
import { Solana } from 'types';
import { WalletActionType } from './actionTypes';
import { walletSetState } from './actionCreators';

const contractAddress = 'cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ';

const connection = new Connection(
  clusterApiUrl('devnet'),
  'confirmed',
);

enum ProviderEventName {
  connect = 'connect',
  disconnect = 'disconnect',
}

let provider: Solana;

export const getProvider = async () => {
  if ('solana' in window) {
    const currentProvider = await window?.solana;
    if (currentProvider?.isPhantom) {
      provider = currentProvider;
      return;
    }
  }
  window.open('https://phantom.app/', '_blank');
  return undefined;
};

function* handlePayload({ eventName }: { eventName: ProviderEventName }) {
  try {
    if (eventName === ProviderEventName.connect) {
      yield put(walletSetState({ isConnected: true }));
    }
    if (eventName === ProviderEventName.disconnect) {
      yield put(walletSetState({ isConnected: false }));
    }
  } catch (e: any) {
    console.log('ERROR inside handle payload');
    console.log(e.message);
  }
}

let providerChannel: EventChannel<unknown>;

function* watchProviderConnection() {
  providerChannel = eventChannel((emit) => {
    provider.on(ProviderEventName.connect, (event: any) => {
      emit({ event, eventName: ProviderEventName.connect });
    });
    provider.on(ProviderEventName.disconnect, () => {
      emit({ eventName: ProviderEventName.disconnect });
    });
    return () => {
      console.log('RETURN AT CREATE CHANNEL');
    };
  });
  yield takeEvery(providerChannel, handlePayload);
}

function* connectWalletSaga() {
  try {
    if (!provider) {
      yield getProvider();
    }

    if (provider !== undefined) {
      yield spawn(watchProviderConnection);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const resp: any = yield provider.connect();

      if (resp != null) {
        const publicAddress = resp.publicKey.toString();
        yield put(walletSetState({ publicAddress }));
      }
    }
  } catch (exception) {
    console.log('exception', exception);
  }
}

function* mintWalletSaga() {
  try {
    console.log('inside MINT SAGA');
    if (!provider) {
      console.log('no provider, get provider');
      yield getProvider();
    }
    console.log('provider', provider);

    console.log('line before RESP');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const resp: any = yield provider.connect();

    console.log('line before fromPublicKey');
    const fromPublicKey: PublicKey = resp.publicKey;

    console.log('fromPublicKey', fromPublicKey);

    const mintPublicKey = new PublicKey(contractAddress);

    console.log('toPubkey', mintPublicKey);

    const mintToken = new Token(
      connection,
      mintPublicKey,
      TOKEN_PROGRAM_ID,
      provider.publicKey,
    );

    console.log('mintToken', mintToken);

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: fromPublicKey,
        toPubkey: mintPublicKey,
        lamports: 1 * LAMPORTS_PER_SOL,
      }),
    );

    console.log('transaction', transaction);

    // const signature: TransactionSignature = yield sendAndConfirmTransaction(
    //   connection,
    //   transaction,
    //   [resp],
    // );

    // console.log('SIGNATURE', signature);

    // const signAndSend: any = yield provider.signAndSendTransaction(transaction);

    // console.log('signAndSend', signAndSend);
  } catch (exception) {
    console.log('exception inside mint saga', exception);
  }
}

export function* walletSagas() {
  yield takeLatest(WalletActionType.CONNECT, connectWalletSaga);
  yield takeLatest(WalletActionType.MINT, mintWalletSaga);
}
