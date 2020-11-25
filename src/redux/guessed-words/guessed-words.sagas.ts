import {
  PutEffect,
  CallEffect,
  ForkEffect,
} from 'redux-saga/effects';
import { call, put, takeLatest } from 'typed-redux-saga';
import {
  correctGuess,
} from './guessed-words.actions';

import {
  GuessedWordsActionTypes,
  // GuessedWordsAction,
} from './guessed-words.types';


import { api } from '../../utils/api';

export function* guessWord(): Generator<
  CallEffect | PutEffect,
  void,
  unknown
> {
  // console.log('getPublicApi saga started');
  // console.log('action: ');
  // console.log(action);

  try {
    // const data = yield call(api.get, '/api/test/public');
    // console.log('getPublicApi() saga 1');

    // const data: any = yield call(generalApi.getPublicMessage);
    // console.log('getPublicApi() saga 2');
    // console.log('data:');
    // console.log(typeof data);
    // console.log(data);
    console.log('guessWord() saga started');
    const data: any = yield* call(api.get, '/api/test/public');

    // console.log('data:');
    // console.log(typeof data);
    // console.log(data);
    const json = data.data;
    // console.log('json:');
    // console.log(json);

    if (data && !data.err && data.status === 200) {
      yield* put(correctGuess({ guessedWord: 'abcde', letterMatchCount: 3 }));
    } else {
      yield* put(correctGuess({ guessedWord: 'abcde', letterMatchCount: 3 }));
    }
  } catch (err) {
    console.log('error occured');
  }
  console.log('guessWord() saga finsshed');
}

export function* guessWordStartSaga(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield* takeLatest(GuessedWordsActionTypes.GUESS_WORD, guessWord);
}

