import { findByTestAttr, storeFactory } from '../../test/testUtils';
import { guessWord } from './guessed-words/guessed-words.actions';

const setup = (initialState?: RootState) => {
  const store = storeFactory(initialState);
  // console.log('store: ');
  // console.log(store.getState());
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;

}

describe('guessWord action dispatcher', () => {
  describe('no guessed words', () => {
    test('updates state correctly for unsuccessful guess', () => {

    });

    test('updates state correctly for successful guess', () => {

    });
  });
  describe('some guessed words', () => {
    test('updates state correctly for unsuccessful guess', () => {

    });

    test('updates state correctly for successful guess', () => {

    });
  });
});