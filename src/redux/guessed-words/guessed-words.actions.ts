import {
  GuessedWordsActionTypes,
  GuessedWordsAction,
  GuessedWord,
} from './guessed-words.types';

export function guessWord(
  newGuessedWord: GuessedWord
): GuessedWordsAction {
  return {
    type: GuessedWordsActionTypes.GUESS_WORD,
    payload: newGuessedWord,
  };
}

export function evaluateWord(
  newEvaluatedWord: string
): GuessedWordsAction {
  return {
    type: GuessedWordsActionTypes.EVALUATE_WORD,
    payload: newEvaluatedWord,
  };
}