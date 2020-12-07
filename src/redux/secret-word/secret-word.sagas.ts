import {
  PutEffect,
  CallEffect,
  ForkEffect,
  call,
  put,
  takeLatest
} from 'redux-saga/effects';

// import { put, call, takeLatest } from 'typed-redux-saga';

import {
  setSecretWord
} from './secret-word.actions';

import {
  SecretWordActionTypes,
  getSecretWordAction,
} from './secret-word.types';

import { api } from '../../utils/api';

export function* getSecretWordSaga(action: getSecretWordAction): Generator<CallEffect | PutEffect, void, unknown>
  {
  try {
    // console.log('getSecretWordSaga() - saga started');
    const response:any = yield call(api.get, '/api/word');
    yield put(setSecretWord(response.data.word));
    // console.log('getSecretWordSaga() - getSecretWordSaga() saga finsshed');
 
  } catch (err) {
    console.log(err);
    // console.log('getSecretWordSaga() - saga finished with errors');
  }
}

export function* getSecretWordSagaStart(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(SecretWordActionTypes.GET_SECRET_WORD, getSecretWordSaga);
}

