import {
  GuessedWordsActionTypes,
  GuessedWordsAction,
  GuessedWord,
} from './guessed-words.types';

export function correctGuess(
  newGuessedWord: GuessedWord
): GuessedWordsAction {
  return {
    type: GuessedWordsActionTypes.GUESS_WORD,
    payload: newGuessedWord,
  };
}