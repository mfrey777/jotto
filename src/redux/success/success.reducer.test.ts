import { SuccessActionTypes, } from './success.types'
import gameReducer from './success.reducer';


// test('returns default initial sate of `false` when no action is passed', () => {
//   const newState = gameReducer(undefined, );
//   expect(newState).toBe(false);
// });

test('returns state of true upon receving an action of type `CORRECT_GUESS', () => {
  const newState = gameReducer(undefined, { type: SuccessActionTypes.CORRECT_GUESS});
  expect(newState).toBe(true);
});
