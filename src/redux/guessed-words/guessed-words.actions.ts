import {
  GuessedWordsActionTypes,
  GuessedWordsAction,
  GuessedWord,
} from './guessed-words.types';

export function guessWord(
  newEvaluatedWord: string
): GuessedWordsAction {
  return {
    type: GuessedWordsActionTypes.GUESS_WORD,
    payload: newEvaluatedWord,
  };
}

export function guessWordResult(
  newGuessedWord: GuessedWord
): GuessedWordsAction {
  return {
    type: GuessedWordsActionTypes.GUESS_WORD_RESULT,
    payload: newGuessedWord,
  };
}

