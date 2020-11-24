import { GameActionTypes, } from './game.types'
import gameReducer from './game.reducer';


// test('returns default initial sate of `false` when no action is passed', () => {
//   const newState = gameReducer(undefined, );
//   expect(newState).toBe(false);
// });

test('returns state of true upon receving an action of type `CORRECT_GUESS', () => {
  const newState = gameReducer(undefined, { type: GameActionTypes.CORRECT_GUESS});
  expect(newState.success).toBe(true);
});
