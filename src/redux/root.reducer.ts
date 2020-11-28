import { combineReducers } from 'redux';
import successReducer from './success/success.reducer';
import guessedWordsReducer from './guessed-words/guessed-words.reducer';
import secretWordsReducer from './secret-word/secret-word.reducer';

export const rootReducer = combineReducers( {
  success: successReducer,
  guessedWords: guessedWordsReducer,
  secretWord: secretWordsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;