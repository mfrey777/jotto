import { all, call, AllEffect, CallEffect } from 'redux-saga/effects';

import { guessWordStartSaga } from './guessed-words/guessed-words.sagas'

export default function* rootSaga(): Generator<
  AllEffect<CallEffect<void>>,
  void,
  unknown
> {
  yield all([
    call(guessWordStartSaga),
  ]
  );
}
