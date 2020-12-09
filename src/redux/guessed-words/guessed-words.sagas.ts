import {
  PutEffect,
  CallEffect,
  ForkEffect,
  SimpleEffect,
  SelectEffectDescriptor
} from 'redux-saga/effects';
import { put, select, takeLatest } from 'typed-redux-saga';
import {
  guessWordResult
} from './guessed-words.actions';

import { correctGuess } from '../success/success.actions';

import { selectSecretWord } from './../secret-word/secret-word.select';

import { getLetterMatchCount } from '../../helpers';

import {
  GuessedWordsActionTypes,
  guessWordAction
  // GuessedWordsAction,
} from './guessed-words.types';

// import { api } from '../../utils/api';

export function* evaluateWord(action: guessWordAction): Generator<
  CallEffect | PutEffect  | SimpleEffect<"SELECT", SelectEffectDescriptor> | void,
  void,
  unknown
> {
  try {
    // console.log('guessWord() - saga started');
    const guessedWord = action.payload
    const secretWord = yield* select(selectSecretWord);
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    // console.log('guessWordResult() - action guessWord called with params; ' + guessedWord + '/' + letterMatchCount);
    yield* put(guessWordResult({ guessedWord, letterMatchCount }));
    if(guessedWord === secretWord) {
      // console.log('guessWord() - action corretGuess called');
      yield* put(correctGuess());
    }
 
    
  } catch (err) {
    console.log('guessWord() - error occured');
  }
  // yield console.log('guessWord() - saga finshed');
}

export function* evaluateWordStart(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield* takeLatest(GuessedWordsActionTypes.GUESS_WORD, evaluateWord);
}

