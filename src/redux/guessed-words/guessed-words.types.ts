export interface GuessedWord {
  guessedWord: string;
  letterMatchCount: number;
}

export enum GuessedWordsActionTypes {
  GUESS_WORD = 'GUESS_WORD',
  EVALUATE_WORD = 'EVALUATE_WORD'
}

export interface evaluateWordAction {
  type: GuessedWordsActionTypes.EVALUATE_WORD;
  payload: string;
}

export interface guessWordAction {
  type: GuessedWordsActionTypes.GUESS_WORD;
  payload: GuessedWord;
}

export type GuessedWordsAction =
  | guessWordAction
  | evaluateWordAction;
