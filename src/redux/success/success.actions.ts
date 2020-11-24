import {
  SuccessActionTypes,
  SuccessAction,
} from './success.types';

export function correctGuess(
): SuccessAction {
  return {
    type: SuccessActionTypes.CORRECT_GUESS,
  };
}