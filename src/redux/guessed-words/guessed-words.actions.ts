import {
  GuessedWordsActionTypes,
  GuessedWordsAction,
  GuessedWord,
} from './guessed-words.types';

export function guessWord(
  newGuessedWord: string
): GuessedWordsAction {
  return {
    type: GuessedWordsActionTypes.GUESS_WORD,
    payload: newGuessedWord,
  };
}