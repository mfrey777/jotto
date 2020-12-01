import {
  PutEffect,
  CallEffect,
  ForkEffect,
} from 'redux-saga/effects';
import { takeLatest, put } from 'typed-redux-saga';
import axios, {AxiosResponse} from 'axios';

import {
  setSecretWord
} from './secret-word.actions';


import {
  SecretWordActionTypes,
  getSecretWordAction,
  // GuessedWordsAction,
} from './secret-word.types';

// import { api } from '../../utils/api';

export function* getSecretWordSaga(action: getSecretWordAction): Generator<
  CallEffect | PutEffect  | Promise<AxiosResponse<any>> | void,
  void,
  unknown
> {
  
  try {
    console.log('getSecretWordSaga() saga started');
    const ret:any =  yield axios.get('http://localhost:3030');
    console.log('ret:');
    console.log(ret);
    yield* put(setSecretWord(ret.data));

    console.log('getSecretWordSaga() saga finsshed');
 
    
  } catch (err) {
    console.log('error occured');
    console.log('getSecretWordSaga() saga finsshed');
  }
}

export function* getSecretWordSagaStart(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield* takeLatest(SecretWordActionTypes.GET_SECRET_WORD, getSecretWordSaga);
}

