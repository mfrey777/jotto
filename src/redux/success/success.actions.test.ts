import { correctGuess } from './success.actions';
import { SuccessActionTypes } from './success.types'

describe('correctGuessSuccess', () => {
  test('returns an action with type `CORRECT_GUESS', () => {
    const action = correctGuess();
    expect(action).toEqual({type: SuccessActionTypes.CORRECT_GUESS});
  });
});
