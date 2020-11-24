interface GuessedWord {
  guessedWord: string;
  letterMatchCount: number;
}

export interface GameState {
  secretWord: string;
  success: true;
  guessedWord: GuessedWord[];
}

// export interface BasicMessage {
//   msg: string;
// }

export enum GameActionTypes {
  CORRECT_GUESS = 'CORRECT_GUESS',
}

// export enum GeneralActionTypes {
//   PROTECTED_API_START = 'PROTECTED_API_START',
//   PROTECTED_API_SUCCESS = 'PROTECTED_API_SUCCESS',
//   PROTECTED_API_FAILURE = 'PROTECTED_API_FAILURE',
// }

export interface correctGuessGameAction {
  type: GameActionTypes.CORRECT_GUESS;
}

// export interface protectedApiSuccessAction {
//   type: GeneralActionTypes.PROTECTED_API_SUCCESS;
//   payload: ExtendedMessage;
// }

// export interface protectedApiFailureAction {
//   type: GeneralActionTypes.PROTECTED_API_FAILURE;
//   payload: ExtendedMessage;
// }

export type GameAction =
  | correctGuessGameAction
//   | protectedApiSuccessAction
//   | protectedApiFailureAction;
