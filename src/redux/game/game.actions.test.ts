import { correctGuess } from './game.actions';
import { GameActionTypes } from './game.types'

describe('correctGuessSuccess', () => {
  test('returns an action with type `CORRECT_GUESS', () => {
    const action = correctGuess();
    expect(action).toEqual({type: GameActionTypes.CORRECT_GUESS});
  });
});
