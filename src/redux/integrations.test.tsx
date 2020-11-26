import { findByTestAttr, storeFactory } from '../../test/testUtils';
import { guessWord } from './guessed-words/guessed-words.actions';
import { RootState } from './root.reducer';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory();
    });
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectState = {
        ...initialState,
        sucesss: false,
        guessedWords: [
          { guessWord: unsuccessfulGuess, letterMatchCount: 3 }
        ]
      }
      expect(newState).toEqual(expectState);

    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectState = {
        ...initialState,
        sucesss: true,
        guessedWords: [
          { guessWord: secretWord, letterMatchCount: 5 }
        ]
      }
      expect(newState).toEqual(expectState);

    });
  });
  describe('some guessed words', () => {
    test('updates state correctly for unsuccessful guess', () => {
      const guessedWords = [
        { guessWord: 'agile', letterMatchCount: 1 }
      ]
      const initialState = { guessedWords, secretWord }
      let store;
      beforeEach(() => {
        store = storeFactory(initialState);
      });
]
    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectState = {
        ...initialState,
        sucesss: false,
        guessedWords: [
          { guessWord: unsuccessfulGuess, letterMatchCount: 3 }
        ]
      }
      expect(newState).toEqual(expectState);
    });
  });
});