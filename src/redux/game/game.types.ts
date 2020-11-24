export interface GuessedWord {
  guessedWord: string;
  letterMatchCount: number;
}

export interface GameState {
  secretWord: string;
  success: boolean;
  guessedWord: GuessedWord[];
}

// export interface BasicMessage {
//   msg: string;
// }

export enum GameActionTypes {
  CORRECT_GUESS = 'CORRECT_GUESS',
}

export interface correctGuessGameAction {
  type: GameActionTypes.CORRECT_GUESS;
}

// export interface protectedApiSuccessAction {
//   type: GeneralActionTypes.PROTECTED_API_SUCCESS;
//   payload: BasicMessage;
// }

export type GameAction =
  | correctGuessGameAction;
