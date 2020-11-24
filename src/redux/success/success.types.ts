export enum SuccessActionTypes {
  CORRECT_GUESS = 'CORRECT_GUESS',
}

export interface correctGuessSuccessAction {
  type: SuccessActionTypes.CORRECT_GUESS;
}

export type SuccessAction =
  | correctGuessSuccessAction;
