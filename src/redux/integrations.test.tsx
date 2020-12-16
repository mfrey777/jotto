import { storeFactory } from '../../test/testUtils';
import { evaluateGuessedWord } from './GuessedWordsSlice';
import { secretWordSuccess } from './secretWordSlice';
import { RootState } from './root.reducer';
import { Store } from 'redux';

describe('evaluateGuessedWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    let store: Store<RootState>;
    const initialState = { secretWord: { loading: false, error: null, word:'party'} };
    beforeEach(() => {
      store = storeFactory();
      store.dispatch(secretWordSuccess(secretWord));
    });
    
    test('updates state correctly for unnsuccessful guess', () => {
      store.dispatch(evaluateGuessedWord(unsuccessfulGuess));
      // console.log('retrieving new state');
      const newState = store.getState();
      const expectState = {
        ...initialState,
        success: { status: false},
        guessedWords: {
          words:[
            { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
          ]
        }
      }
      expect(newState).toEqual(expectState);

    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(evaluateGuessedWord(secretWord));
      const newState = store.getState();
      const expectState = {
        ...initialState,
        success: { status: true},
        guessedWords: {
          words: [
            { guessedWord: secretWord, letterMatchCount: 5 }
          ]
        }
      }
      expect(newState).toEqual(expectState);

    });
  });
  describe('some guessed words', () => {
    const initialStateGuessedWords = {words: [
      { guessedWord: 'agile', letterMatchCount: 1 }
    ]}
    const initialStateSuccess = { status: false};
    const initialState = { success: initialStateSuccess, guessedWords: initialStateGuessedWords, secretWord: { loading: false, errorMessage: '', word:'party'} }
    let store: Store<RootState>;
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(evaluateGuessedWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectState = {
        ...initialState,
        success: { status: false},
        guessedWords: { words: [...initialState.guessedWords.words, { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }]}
      }
      expect(newState).toEqual(expectState);
    
    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(evaluateGuessedWord(secretWord));
      const newState = store.getState();
      const expectState = {
        ...initialState,
        success: { status: true},
        guessedWords: { words: [...initialState.guessedWords.words, { guessedWord: secretWord, letterMatchCount: 5 }]}
      }
      expect(newState).toEqual(expectState);
    });
  });
});