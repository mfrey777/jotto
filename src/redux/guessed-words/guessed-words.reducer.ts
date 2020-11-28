import { GuessedWordsActionTypes, GuessedWordsAction, GuessedWord } from './guessed-words.types'

function guessedWordsReducer(state = new Array<GuessedWord>(), action: GuessedWordsAction): GuessedWord[] {
  switch (action.type) {
    case GuessedWordsActionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default guessedWordsReducer;