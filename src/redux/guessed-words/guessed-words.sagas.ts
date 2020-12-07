import {
  PutEffect,
  CallEffect,
  ForkEffect,
  SimpleEffect,
  SelectEffectDescriptor
} from 'redux-saga/effects';
import { put, select, call, takeLatest } from 'typed-redux-saga';
import {
  guessWord
} from './guessed-words.actions';

import { correctGuess } from '../success/success.actions';

import { selectSecretWord } from './../secret-word/secret-word.select';

import { getLetterMatchCount } from '../../helpers';

import {
  GuessedWordsActionTypes,
  evaluateWordAction
  // GuessedWordsAction,
} from './guessed-words.types';

// import { api } from '../../utils/api';

export function* evaluateWord(action: evaluateWordAction): Generator<
  CallEffect | PutEffect  | SimpleEffect<"SELECT", SelectEffectDescriptor> | void,
  void,
  unknown
> {
  try {
    console.log('guessWord() - saga started');
    // console.log('payload is: ' + action.payload);
    const guessedWord = action.payload
    const secretWord = yield* select(selectSecretWord);
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    console.log('guessWord() - action guessWord called with params; ' + guessedWord + '/' + letterMatchCount);
    // const response:any = yield* call(api.get, '/api/word');
    // console.log('guessWord() - axios query returned: ');
    // console.log(response);
    // Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500);
    // let date = new Date();
    // let curDate:Date;
    // do { curDate = new Date(); }
    // while(Number(curDate)-Number(date) < 500);
    yield* put(guessWord({ guessedWord, letterMatchCount }));
    if(guessedWord === secretWord) {
      console.log('guessWord() - action corretGuess called');
      yield* put(correctGuess());
    }
 
    
  } catch (err) {
    console.log('guessWord() - error occured');
  }
  yield console.log('guessWord() - saga finsshed');
}

export function* evaluateWordStart(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield* takeLatest(GuessedWordsActionTypes.EVALUATE_WORD, evaluateWord);
}

