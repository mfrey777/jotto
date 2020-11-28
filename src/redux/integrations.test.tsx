import { storeFactory } from '../../test/testUtils';
import { evaluateWord } from './guessed-words/guessed-words.actions';
import { setSecretWord } from './secret-word/secret-word.actions';
import { RootState } from './root.reducer';
import { Store } from 'redux';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    let store: Store<RootState>;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory();
      store.dispatch(setSecretWord(secretWord));
    });
    
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(evaluateWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectState = {
        ...initialState,
        success: false,
        guessedWords: [
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
        ]
      }
      expect(newState).toEqual(expectState);

    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(evaluateWord(secretWord));
      const newState = store.getState();
      const expectState = {
        ...initialState,
        success: true,
        guessedWords: [
          { guessedWord: secretWord, letterMatchCount: 5 }
        ]
      }
      expect(newState).toEqual(expectState);

    });
  });
  describe('some guessed words', () => {
    const guessedWords = [
      { guessedWord: 'agile', letterMatchCount: 1 }
    ]
    const initialState = { success: false, guessedWords, secretWord }
    let store: Store<RootState>;
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {

      // var unsubscribe = store.subscribe(function() {
      //   console.log('unsubscribe called, store is : ');
      //   console.log(store.getState());
      //   const newState = store.getState();
      //   const expectState = {
      //     ...initialState,
      //     success: false,
      //     guessedWords: [ ...guessedWords,
      //       { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
      //     ]
      //   }
      //   expect(newState).toEqual(expectState);
      //   // done();
      // });
      

      store.dispatch(evaluateWord(unsuccessfulGuess));
      console.log('unsubscribe called, store is : ');
      console.log(store.getState());
      const newState = store.getState();
      const expectState = {
        ...initialState,
        success: false,
        guessedWords: [ ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
        ]
      }
      expect(newState).toEqual(expectState);
      
      // const newState = store.getState();
      // const expectState = {
      //   ...initialState,
      //   success: false,
      //   guessedWords: [ ...guessedWords,
      //     { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
      //   ]
      // }
      // expect(newState).toEqual(expectState);
    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(evaluateWord(secretWord));
      const newState = store.getState();
      const expectState = {
        ...initialState,
        success: true,
        guessedWords: [ ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 }
        ]
      }
      expect(newState).toEqual(expectState);
    });
  });
});