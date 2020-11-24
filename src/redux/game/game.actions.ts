import {
  GameActionTypes,
  GameAction,
} from './game.types';

export function correctGuess(
): GameAction {
  return {
    type: GameActionTypes.CORRECT_GUESS,
  };
}

// export function correctGuessSuccess() {
//   return {};
// }