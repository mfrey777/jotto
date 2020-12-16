import successReducer, { correctGuess } from './successSlice';

describe('action correctGuess', () => {
  test('returns an action with type `success/correctGuess', () => {
    const action = correctGuess();
    expect(action).toEqual({type: 'success/correctGuess'});
  });
});

describe('reducer successReducer', () => {
  test('returns state of status=true upon receving an action of type `correctGuess', () => {
    const newState = successReducer(undefined, correctGuess());
    expect(newState).toEqual({status: true});
  });
});