import {
  SuccessActionTypes,
  SuccessAction,
} from './success.types';

export function correctGuessSuccess(
): SuccessAction {
  return {
    type: SuccessActionTypes.CORRECT_GUESS,
  };
}


// export function correctGuessSuccess() {
//   return {};
// }