export interface GuessedWord {
  guessedWord: string;
  letterMatchCount: number;
}

export enum GuessedWordsActionTypes {
  GUESS_WORD = 'GUESS_WORD',
  GUESS_WORD_RESULT = 'GUESS_WORD_RESULT'
}

export interface guessWordAction {
  type: GuessedWordsActionTypes.GUESS_WORD;
  payload: string;
}

export interface guessWordResultAction {
  type: GuessedWordsActionTypes.GUESS_WORD_RESULT;
  payload: GuessedWord;
}

export type GuessedWordsAction =
  | guessWordAction
  | guessWordResultAction;
