export interface GuessedWord {
  guessedWord: string;
  letterMatchCount: number;
}

export enum GuessedWordsActionTypes {
  GUESS_WORD = 'GUESS_WORD',
}

export interface guessWordAction {
  type: GuessedWordsActionTypes.GUESS_WORD;
  payload: string;
}

export type GuessedWordsAction =
  | guessWordAction;
