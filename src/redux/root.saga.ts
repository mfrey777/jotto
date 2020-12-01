import { all, call, AllEffect, CallEffect } from 'redux-saga/effects';

import { evaluateWordStart } from './guessed-words/guessed-words.sagas'
import { getSecretWordSagaStart } from './secret-word/secret-word.sagas';

export default function* rootSaga(): Generator<
  AllEffect<CallEffect<void>>,
  void,
  unknown
> {
  yield all([
    call(evaluateWordStart),
    call(getSecretWordSagaStart),
  ]
  );
}
